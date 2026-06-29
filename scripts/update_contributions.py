#!/usr/bin/env python3
"""
Fetch public GitHub contribution data from the profile page HTML
and write a JSON file with daily commit counts for the last 90 days.

Runs as part of a scheduled GitHub Actions workflow.
"""

import json
import os
import re
from datetime import datetime, timedelta, timezone
from urllib.request import Request, urlopen


def fetch_contributions_html(username: str) -> str:
    url = f"https://github.com/users/{username}/contributions"
    req = Request(url, headers={"User-Agent": f"{username}-contributions-sync"})
    with urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8")


def parse_contributions(html: str) -> dict:
    """Extract date -> count from GitHub contribution graph HTML."""
    # Match each day cell and its adjacent tooltip.
    pattern = re.compile(
        r'<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*>.*?<tool-tip[^>]*>'
        r'(?:No contributions|(\d+)\s+contributions)',
        re.DOTALL,
    )
    counts = {}
    for date, count_str in pattern.findall(html):
        counts[date] = int(count_str) if count_str else 0
    return counts


def build_last_90_days(counts: dict) -> list:
    today = datetime.now(timezone.utc).date()
    result = []
    for i in range(89, -1, -1):
        d = today - timedelta(days=i)
        key = d.isoformat()
        result.append({"date": key, "count": counts.get(key, 0)})
    return result


def main():
    username = os.environ.get("GH_USERNAME", "v-i-s-h-a-l")
    output_path = os.environ.get("OUTPUT_PATH", "assets/data/contributions.json")

    html = fetch_contributions_html(username)
    counts = parse_contributions(html)
    data = build_last_90_days(counts)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")

    total = sum(day["count"] for day in data)
    print(f"Wrote {len(data)} days ({total} commits) to {output_path}")


if __name__ == "__main__":
    main()
