#!/usr/bin/env python3
"""
Property Lookup Script
Pulls square footage, # of stories, year built using homeharvest
"""

import json, sys

def main():
    if len(sys.argv) < 2:
        print("Usage: python property_lookup.py \"<address>\"")
        print("Example: python property_lookup.py \"123 Main St, Charlotte, NC 28205\"")
        sys.exit(1)

    address = sys.argv[1]

    try:
        from homeharvest import scrape_property
    except ImportError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.stdout.flush()
        sys.exit(1)

    try:
        props = scrape_property(location=address, listing_type=None) #refactor to build query string from address properties
        if not props.empty:
            result = props.iloc[0]
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.stdout.flush()
        sys.exit(1)

    if result is None:
        print(json.dumps({
        "sqft": None, 
        "year_built": None, 
        "stories": None
        }))
        sys.exit(0)

    sqft = result.get("sqft",       "N/A")
    year_built = result.get("year_built", "N/A")
    stories = result.get("stories",    "N/A")

    print(json.dumps({
        "sqft": int(sqft) if sqft != "N/A" else None, 
        "year_built": int(year_built) if year_built != "N/A" else None, 
        "stories": int(stories) if stories != "N/A" else None
        }))

if __name__ == "__main__":
    main()