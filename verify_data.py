#!/usr/bin/env python3
"""
Verification script: reads cpd_data.csv, maps charges to categories using
the charge→category mapping extracted from script.js DATA, then compares
computed counts to the hardcoded values.
"""

import csv
import json
import re
from collections import defaultdict
from pathlib import Path

# ── 1. Extract DATA from script.js ──────────────────────────────────────────

script_path = Path(__file__).parent / "script.js"
raw = script_path.read_text(encoding="utf-8")
match = re.search(r'^const DATA = (\[.*?\]);', raw, re.DOTALL | re.MULTILINE)
if not match:
    raise RuntimeError("Could not find DATA in script.js")
DATA = json.loads(match.group(1))

# Build charge-name → category-name mapping
charge_to_category = {}
for group in DATA:
    for charge in group["charges"]:
        charge_to_category[charge["name"].strip().lower()] = group["group"]

# ── 2. Decision type normalization ───────────────────────────────────────────

def normalize_decision(raw):
    """Map raw CSV decision string to DATA label."""
    r = raw.strip().lower()
    if r == "suspension":                               return "Suspension"
    if r == "dismissal":                                return "Dismissal"
    if r in ("non-disciplinary letter of reinstruction",
             "reinstruction"):                          return "Reinstruction"
    if r == "written reprimand":                        return "Written Reprimand"
    if r == "termination":                              return "Termination"
    if r == "separation":                               return "Separation"
    if r == "resignation":                              return "Resignation"
    if r == "demotion":                                 return "Demotion"
    if r in ("written warning", "warning",
             "verbal warning"):                         return "Warning"
    return None  # unknown / unmapped

# CSV charge name → canonical DATA charge name (lowercase → lowercase)
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

csv_path = Path(__file__).parent.parent / "cpd_data.csv"
if not csv_path.exists():
    raise FileNotFoundError(f"CSV not found at {csv_path}")

# Count charge appearances (not unique hearings): a hearing with 2 charges
# in the same category increments that category's count twice.
category_hearings = defaultdict(int)
charge_hearings   = defaultdict(int)
category_decisions = defaultdict(lambda: defaultdict(int))
charge_decisions  = defaultdict(lambda: defaultdict(int))

unmapped_charges = defaultdict(int)
unknown_decisions = defaultdict(int)

TOTAL_HEARINGS = 1749

with open(csv_path, newline="", encoding="utf-8-sig") as f:
    reader = csv.DictReader(f)
    for row in reader:
        hearing_id = row["ID"].strip()
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
                unknown_decisions[d] += 1

        for charge in charges:
            ckey = charge.lower().strip()
            ckey = CSV_CHARGE_ALIASES.get(ckey, ckey)  # apply alias
            category = charge_to_category.get(ckey)
            if category is None:
                unmapped_charges[charge] += 1
                continue

            charge_hearings[ckey] += 1
            category_hearings[category] += 1

            for nd in norm_decisions:
                charge_decisions[ckey][nd] += 1
                category_decisions[category][nd] += 1

# ── 4. Compare ────────────────────────────────────────────────────────────────

BOLD  = "\033[1m"
RED   = "\033[31m"
GREEN = "\033[32m"
RESET = "\033[0m"

def chk(expected, computed):
    if expected == computed:
        return f"{GREEN}✓{RESET}"
    return f"{RED}✗ (expected {expected}, got {computed}){RESET}"

print(f"\n{'='*70}")
print(f"  CPD DATA VERIFICATION  (TOTAL_HEARINGS = {TOTAL_HEARINGS})")
print(f"{'='*70}\n")

all_ok = True

for group in DATA:
    gname = group["group"]
    exp_count = group["count"]
    exp_pct   = group["pct"]

    comp_count = category_hearings[gname]
    comp_pct   = round(comp_count / TOTAL_HEARINGS * 100, 1)

    count_ok = (exp_count == comp_count)
    pct_ok   = (exp_pct   == comp_pct)
    if not (count_ok and pct_ok):
        all_ok = False

    print(f"{BOLD}{gname}{RESET}")
    print(f"  Count : {chk(exp_count, comp_count)}")
    print(f"  Pct   : {chk(exp_pct, comp_pct)}")

    # Decision breakdown for group
    for dec in group["decisions"]:
        dlabel = dec["label"]
        exp_dc = dec["count"]
        comp_dc = category_decisions[gname][dlabel]
        ok = (exp_dc == comp_dc)
        if not ok:
            all_ok = False
            print(f"    {dlabel}: {chk(exp_dc, comp_dc)}")

    # Charge breakdown
    for charge in group["charges"]:
        ckey     = charge["name"].lower()
        exp_cc   = charge["count"]
        exp_cpct = charge["pct"]
        comp_cc  = charge_hearings[ckey]
        comp_cpct = round(comp_cc / TOTAL_HEARINGS * 100, 1)

        ccount_ok = (exp_cc   == comp_cc)
        cpct_ok   = (exp_cpct == comp_cpct)
        if not (ccount_ok and cpct_ok):
            all_ok = False
            print(f"  Charge: {charge['name']}")
            print(f"    Count : {chk(exp_cc, comp_cc)}")
            print(f"    Pct   : {chk(exp_cpct, comp_cpct)}")

        for dec in charge["decisions"]:
            dlabel = dec["label"]
            exp_dc = dec["count"]
            comp_dc = charge_decisions[ckey][dlabel]
            ok = (exp_dc == comp_dc)
            if not ok:
                all_ok = False
                print(f"    Charge '{charge['name']}' {dlabel}: {chk(exp_dc, comp_dc)}")

    print()

# ── 5. Diagnostics ────────────────────────────────────────────────────────────

if unmapped_charges:
    print(f"{BOLD}UNMAPPED CHARGES (not in any category):{RESET}")
    for ch, n in sorted(unmapped_charges.items(), key=lambda x: -x[1]):
        print(f"  [{n:4d}x]  {ch}")
    print()

if unknown_decisions:
    print(f"{BOLD}UNKNOWN DECISION TYPES (not normalized):{RESET}")
    for d, n in sorted(unknown_decisions.items(), key=lambda x: -x[1]):
        print(f"  [{n:4d}x]  {d}")
    print()

if all_ok:
    print(f"{GREEN}{BOLD}All counts and percentages match!{RESET}\n")
else:
    print(f"{RED}{BOLD}Some values differ — see ✗ lines above.{RESET}\n")
