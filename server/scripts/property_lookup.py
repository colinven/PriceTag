#!/usr/bin/env python3
"""
Property Lookup Script
Pulls square footage, # of stories, year built using homeharvest
"""

import json, sys, pandas

def main():

    # handle invalid argument length
    if len(sys.argv) != 2:
        sys.stderr.write(f"argument length invalid, correct arguments passed?\n")
        sys.exit(1)

    address = sys.argv[1]

    # handle cases where homeharvest is not installed
    try:
        from homeharvest import scrape_property
    except ImportError as e:
        sys.stderr.write(f"homeharvest not installed. ran `./setup.sh` from project root?\n")
        sys.exit(1)

    try:
        props = scrape_property(location=address, listing_type=None)
        if not props.empty:
            result = props.iloc[0]
    except Exception as e:
        sys.stderr.write(f"failed to scrape property data: {e}\n")
        sys.exit(1)

    sqft = result.get("sqft")
    year_built = result.get("year_built")
    stories = result.get("stories")

    sys.stdout.write(json.dumps({
        "sqft": int(sqft) if not pandas.isna(sqft) else None, 
        "year_built": int(year_built) if not pandas.isna(year_built) else None, 
        "stories": int(stories) if not pandas.isna(stories) else None
        }))

if __name__ == "__main__":
    main()