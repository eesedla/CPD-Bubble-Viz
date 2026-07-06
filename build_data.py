#!/usr/bin/env python3
"""
Regenerate the DATA constant in script.js from cpd_data.csv.

Usage: python3 build_data.py
"""

import csv
import json
import re
from collections import defaultdict
from pathlib import Path

HERE = Path(__file__).parent
SCRIPT_JS = HERE / "script.js"
CSV_PATH  = HERE / "cpd_data.csv"

# ── 1. Read existing DATA structure from script.js ───────────────────────────

raw = SCRIPT_JS.read_text(encoding="utf-8")
match = re.search(r'^const DATA = (\[.*?\]);', raw, re.DOTALL | re.MULTILINE)
if not match:
    raise RuntimeError("Could not find DATA in script.js")
TEMPLATE = json.loads(match.group(1))

# Build canonical charge name → group name
charge_to_group = {}
for group in TEMPLATE:
    for charge in group["charges"]:
        charge_to_group[charge["name"].strip().lower()] = group["group"]

# The Body Camera group's charges are display subcategories (classified from
# text), not CSV charge tokens — map the real CSV token explicitly.
charge_to_group["body camera violation"] = "Body Camera Violation" 

# Build canonical charge name → display name (preserve casing)
charge_display = {}
for group in TEMPLATE:
    for charge in group["charges"]:
        charge_display[charge["name"].strip().lower()] = charge["name"].strip()

# Group colors
group_colors = {g["group"]: g["color"] for g in TEMPLATE}

# Decision colors (from DECISION_COLORS in script.js)
match_dc = re.search(r'const DECISION_COLORS = (\{.*?\});', raw, re.DOTALL)
if not match_dc:
    raise RuntimeError("Could not find DECISION_COLORS in script.js")
DECISION_COLORS = json.loads(match_dc.group(1))

# Decision order (from DECISION_ORDER in script.js, skip "All")
match_do = re.search(r'const DECISION_ORDER = (\[.*?\]);', raw, re.DOTALL)
if not match_do:
    raise RuntimeError("Could not find DECISION_ORDER in script.js")
DECISION_ORDER = [d for d in json.loads(match_do.group(1)) if d != "All"]

# ── 2. Normalization helpers ─────────────────────────────────────────────────

def normalize_decision(raw_d):
    r = raw_d.strip().lower()
    if r == "suspension":                               return "Suspension"
    if r == "dismissal":                                return "Charge Dismissed"
    if r in ("non-disciplinary letter of reinstruction",
             "reinstruction"):                          return "Reinstruction"
    if r == "written reprimand":                        return "Written Reprimand"
    if r == "termination":                              return "Termination"
    if r in ("separation", "resignation"):              return "Resignation"
    if r == "demotion":                                 return "Demotion"
    return None

CSV_CHARGE_ALIASES = {
    "wcs violation":                                    "body camera violation",
    "arrest / criminal charge":                         "arrest or criminal charge",
    "conduct unbecoming / diminished esteem":           "diminished esteem of cpd",
    "preventable motor vehicle accident (mva)":         "preventable motor vehicle accident",
    "failure to report/intervene (uof)":                "failed to report/intervene",
    "database misuse (lerms/leads/ohleg)":              "database misuse",
    "improper handling of firearm":                     "improperly handled a firearm",
    "uniform/grooming violation":                       "uniform violation",
    "ops violation":                                    "ops investigation violation",
    "alcohol or smoking on duty / in uniform":          "consumed prohibited substance while on duty",
}

# ── 3. Parse CSV ──────────────────────────────────────────────────────────────

group_count    = defaultdict(int)
charge_count   = defaultdict(int)
group_decs     = defaultdict(lambda: defaultdict(int))
charge_decs    = defaultdict(lambda: defaultdict(int))
unmapped       = defaultdict(int)
unknown_decs   = defaultdict(int)
total_hearings = 0

with open(CSV_PATH, newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        total_hearings += 1
        raw_charges   = row["Charges"].strip()
        raw_decisions = row["Decision type"].strip()

        charges   = [c.strip() for c in raw_charges.split(",")   if c.strip()]
        decisions = [d.strip() for d in raw_decisions.split(",") if d.strip()]

        norm_decisions = []
        for d in decisions:
            nd = normalize_decision(d)
            if nd:
                norm_decisions.append(nd)
            else:
                unknown_decs[d] += 1

        for charge in charges:
            ckey = CSV_CHARGE_ALIASES.get(charge.lower().strip(), charge.lower().strip())
            group = charge_to_group.get(ckey)
            if group is None:
                unmapped[charge] += 1
                continue

            charge_count[ckey] += 1
            group_count[group]  += 1

            for nd in norm_decisions:
                charge_decs[ckey][nd] += 1
                group_decs[group][nd] += 1

print(f"Total hearings in CSV: {total_hearings}")

if unmapped:
    print("\nUNMAPPED CHARGES (excluded from data):")
    for ch, n in sorted(unmapped.items(), key=lambda x: -x[1]):
        print(f"  [{n:4d}x]  {ch}")

if unknown_decs:
    print("\nUNKNOWN DECISION TYPES (excluded from data):")
    for d, n in sorted(unknown_decs.items(), key=lambda x: -x[1]):
        print(f"  [{n:4d}x]  {d}")

# ── 3b. WCS subcategory classification (Body Camera Violation drill-down) ────
# The CSV only has a generic "WCS Violation" charge token, so the drill-down
# subcategories are classified from the WCS-related text of each record.

WCS_KEY_BY_NAME = {
    "Failed to Activate":      "failed_activate",
    "Unspecified":             "unspecified",
    "Ended Recording Early":   "ending_recording",
    "Failed to Upload or Tag": "upload_tag",
    "Damaged or Lost Camera":  "unsecured",
}

def _wcs_text(row):
    chunks = re.split(r"[.;\n]", row.get("Charge & Discipline Decision", "") or "")
    return " | ".join(c.strip() for c in chunks
                      if re.search(r"wcs|wearable|body.?camera", c, re.I)).lower()

def classify_wcs(t):
    f = set()
    if re.search(r"buffer|de-?activat|turn(ed|ing)? off|end(ed|ing)? (the )?record|fail[^|]{0,40}keep[^|]{0,30}event mode|remain(ed)? in event mode", t): f.add("ending_recording")
    if re.search(r"upload|\btag(g|\b)|categoriz", t): f.add("upload_tag")
    if re.search(r"fail[^|]{0,60}safeguard|damage to (city property )?\(?wcs", t): f.add("unsecured")
    if re.search(r"fail[^|]{0,80}(?<!de)activat|without activating|did not activate|never activated|fail[^|]{0,80}(place|put)[^|]{0,50}event mode", t): f.add("failed_activate")
    return f or {"unspecified"}

wcs_count = defaultdict(int)
wcs_decs  = defaultdict(lambda: defaultdict(int))
with open(CSV_PATH, newline="", encoding="utf-8-sig") as f:
    for row in csv.DictReader(f):
        if not any(("wcs" in c.lower() or "body camera" in c.lower())
                   for c in (row["Charges"] or "").split(",")):
            continue
        nds = [normalize_decision(d) for d in (row["Decision type"] or "").split(",") if d.strip()]
        nds = [d for d in nds if d]
        for key in classify_wcs(_wcs_text(row)):
            wcs_count[key] += 1
            for nd in nds:
                wcs_decs[key][nd] += 1

# ── 4. Reconstruct DATA ───────────────────────────────────────────────────────

def build_decisions(dec_counts):
    result = []
    for label in DECISION_ORDER:
        cnt = dec_counts.get(label, 0)
        if cnt > 0:
            result.append({"label": label, "count": cnt, "color": DECISION_COLORS[label]})
    return result

new_data = []
for group in TEMPLATE:
    gname = group["group"]
    gcount = group_count[gname]
    gpct   = round(gcount / total_hearings * 100, 1)

    new_charges = []
    for charge in group["charges"]:
        if gname == "Body Camera Violation" and charge["name"] in WCS_KEY_BY_NAME:
            wkey = WCS_KEY_BY_NAME[charge["name"]]
            entry = {
                "name":      charge["name"],
                "count":     wcs_count[wkey],
                "pct":       round(wcs_count[wkey] / total_hearings * 100, 1),
                "decisions": build_decisions(wcs_decs[wkey]),
            }
            if "desc" in charge:
                entry["desc"] = charge["desc"]
            new_charges.append(entry)
            continue
        ckey   = charge["name"].strip().lower()
        ccount = charge_count[ckey]
        cpct   = round(ccount / total_hearings * 100, 1)
        new_charges.append({
            "name":      charge_display[ckey],
            "count":     ccount,
            "pct":       cpct,
            "decisions": build_decisions(charge_decs[ckey]),
        })

    new_data.append({
        "group":     gname,
        "count":     gcount,
        "pct":       gpct,
        "color":     group_colors[gname],
        "decisions": build_decisions(group_decs[gname]),
        "charges":   new_charges,
    })

# ── 5. Update script.js ───────────────────────────────────────────────────────

data_json = json.dumps(new_data, separators=(",", ":"))
new_raw = re.sub(
    r'^const DATA = \[.*?\];',
    f'const DATA = {data_json};',
    raw,
    flags=re.DOTALL | re.MULTILINE,
)
new_raw = re.sub(
    r'^const TOTAL_HEARINGS = \d+;',
    f'const TOTAL_HEARINGS = {total_hearings};',
    new_raw,
    flags=re.MULTILINE,
)

SCRIPT_JS.write_text(new_raw, encoding="utf-8")
print(f"\nscript.js updated: DATA regenerated, TOTAL_HEARINGS = {total_hearings}")
