#!/usr/bin/env python3
"""
Regenerate data.json from cpd_data.csv.

TAXONOMY (charge -> group mapping, group order, colors) is defined here
statically — it doesn't come from the CSV, since it's a curated editorial
grouping, not a computed value. Everything else (counts, percentages,
decision breakdowns) is computed fresh from the CSV on every run.

Setup:
  - Put cpd_data.csv next to this file (or edit CSV_PATH).

Run:
  python3 build_data.py
"""

import csv
import json
import re
from collections import defaultdict
from pathlib import Path

HERE     = Path(__file__).parent
DATA_JSON = HERE / "data.json"
CSV_PATH  = HERE / "cpd_data.csv"

# ── 1. Static taxonomy ────────────────────────────────────────────────────────
# Group colors are 12 distinct hues drawn from STYLE.md's token set (plus one
# new blue) — one hue per group, no group sharing a lighter/darker shade of
# another group's hue. Categories are identity, not a spectrum, so they don't
# get a gradient (see STYLE.md and the per-year/cpd-viz palette fix).

TAXONOMY = [{'group': 'Neglect of Duty',
  'color': '#23685b',
  'charges': [{'name': 'Failure to Report/Notify'},
              {'name': 'Lack of Service'},
              {'name': 'Neglect of Duty'},
              {'name': 'Duty Report Violation'},
              {'name': 'Failure to Supervise'},
              {'name': 'Asleep On-Duty'},
              {'name': 'Failed to Assist'},
              {'name': 'Failed to Provide Language Services'},
              {'name': 'Failed to Take Corrective Action'}]},
 {'group': 'Unprofessional Behavior',
  'color': '#879599',
  'charges': [{'name': 'Unprofessional Conduct'},
              {'name': 'Offensive Remarks'},
              {'name': 'Diminished Esteem of CPD'},
              {'name': 'Uniform Violation'},
              {'name': 'Appearance of Impropriety'},
              {'name': 'Telecommunications Violation'},
              {'name': 'Failed to Identify'}]},
 {'group': 'Body Camera Violation',
  'color': '#7d6b9e',
  'charges': [{'name': 'Failed to Activate',
               'desc': 'Officer failed to activate the WCS or place it in event mode before or '
                       'during a qualifying incident requiring recording.'},
              {'name': 'Unspecified',
               'desc': 'Disciplinary record listed a generic “WCS violation” without describing '
                       'the specific nature of the offense.'},
              {'name': 'Ended Recording Early',
               'desc': 'Officer turned off the WCS or allowed it to return to buffering mode '
                       'before an incident concluded, cutting off the recording.'},
              {'name': 'Failed to Upload or Tag',
               'desc': 'Officer failed to upload, categorize, or tag captured WCS media at the end '
                       'of a tour or within required timeframes.'},
              {'name': 'Damaged or Lost Camera',
               'desc': 'Officer failed to safeguard assigned WCS equipment — including losing, '
                       'allowing damage to, or failing to secure the device.'}]},
 {'group': 'Attendance',
  'color': '#e6a94d',
  'charges': [{'name': 'Sick Leave Abuse'},
              {'name': 'Absent Without Leave (AWOL)'},
              {'name': 'Refusal of Mandatory Overtime'},
              {'name': 'Tardiness'},
              {'name': 'Attendance and Overtime Violations'}]},
 {'group': 'Use of Force',
  'color': '#d64d4d',
  'charges': [{'name': 'Use of Force Violation'},
              {'name': 'Failed to Report/Intervene'},
              {'name': 'Failed to De-escalate'},
              {'name': 'Failed to Request Medical Attention'},
              {'name': 'Improperly Handled a Firearm'},
              {'name': 'Unauthorized Ammunition/Firearms'}]},
 {'group': 'Integrity and Honesty',
  'color': '#4d7ea8',
  'charges': [{'name': 'Untruthfulness'},
              {'name': 'Database Misuse'},
              {'name': 'Cheating and Plagiarism'},
              {'name': 'Confidential Information Violation'},
              {'name': 'Ethics Violation'}]},
 {'group': 'Vehicle and Travel',
  'color': '#5fa896',
  'charges': [{'name': 'Vehicle Pursuit Violation'},
              {'name': 'Preventable Motor Vehicle Accident'},
              {'name': 'Travel Violation'}]},
 {'group': 'Compliance',
  'color': '#a9d2cf',
  'charges': [{'name': 'Insubordination'},
              {'name': 'Unauthorized Secondary Employment'},
              {'name': 'OPS Investigation Violation'}]},
 {'group': 'Criminal Conduct',
  'color': '#ccd8db',
  'charges': [{'name': 'Arrest or Criminal Charge'}, {'name': 'Violence in the Workplace'}]},
 {'group': 'Improper Conduct',
  'color': '#d0d64c',
  'charges': [{'name': 'Improper Search/Frisk'},
              {'name': 'Improper Arrest/Detainment'},
              {'name': 'Improper Tow'},
              {'name': 'Improper Stop'},
              {'name': 'Arrestee Handling Violation'},
              {'name': 'Improper Citation'},
              {'name': 'Mishandled Juvenile'}]},
 {'group': 'Evidence and Property',
  'color': '#e56430',
  'charges': [{'name': 'Failed to Safeguard Equipment'},
              {'name': 'Evidence Collection Violation'},
              {'name': 'Failed to Safeguard Property'}]},
 {'group': 'Drugs and Alcohol',
  'color': '#dbe7e3',
  'charges': [{'name': 'Drug & Alcohol Testing Policy Violation'},
              {'name': 'Consumed Prohibited Substance While On Duty'}]}]

DECISION_ORDER  = ["All", "Charge Dismissed", "Reinstruction", "Written Reprimand",
                    "Suspension", "Termination", "Resignation", "Demotion"]
DECISION_COLORS = {"Termination": "#d64d4d", "Resignation": "#e56430", "Demotion": "#e6a94d",
                    "Suspension": "#23685b", "Charge Dismissed": "#dbe7e3",
                    "Written Reprimand": "#5fa896", "Reinstruction": "#a9d2cf"}

charge_to_group = {}
charge_display  = {}
for group in TAXONOMY:
    for charge in group["charges"]:
        key = charge["name"].strip().lower()
        charge_to_group[key] = group["group"]
        charge_display[key]  = charge["name"].strip()

# The Body Camera group's charges are display subcategories (classified from
# text), not CSV charge tokens — map the real CSV token explicitly.
charge_to_group["body camera violation"] = "Body Camera Violation"

group_colors = {g["group"]: g["color"] for g in TAXONOMY}

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

        groups_this_hearing = set()
        for charge in charges:
            ckey = CSV_CHARGE_ALIASES.get(charge.lower().strip(), charge.lower().strip())
            group = charge_to_group.get(ckey)
            if group is None:
                unmapped[charge] += 1
                continue

            charge_count[ckey] += 1
            for nd in norm_decisions:
                charge_decs[ckey][nd] += 1

            groups_this_hearing.add(group)

        # Group-level count/decisions are tallied once per hearing per group,
        # not once per matching charge — a hearing with two charges in the
        # same group (e.g. "Failure to Report/Notify, Lack of Service", both
        # Neglect of Duty) previously counted that one hearing twice toward
        # the group's total, inflating "count" past the true number of
        # hearings in that category. Same dedup the per-year chart already
        # uses (see charge-by-year's build_data.py).
        for group in groups_this_hearing:
            group_count[group] += 1
            for nd in norm_decisions:
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

# ── 4. Build data.json ────────────────────────────────────────────────────────

def build_decisions(dec_counts):
    result = []
    for label in DECISION_ORDER:
        cnt = dec_counts.get(label, 0)
        if cnt > 0:
            result.append({"label": label, "count": cnt, "color": DECISION_COLORS[label]})
    return result

new_data = []
for group in TAXONOMY:
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

payload = {
    "totalHearings":  total_hearings,
    "decisionOrder":  DECISION_ORDER,
    "decisionColors": DECISION_COLORS,
    "groups":         new_data,
}

DATA_JSON.write_text(json.dumps(payload, indent=None, separators=(",", ":")), encoding="utf-8")
print(f"\nWrote {DATA_JSON.name}: TOTAL_HEARINGS = {total_hearings}")
