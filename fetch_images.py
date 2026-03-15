import json
import re
import time
from duckduckgo_search import DDGS

api_file = 'src/lib/api.ts'
with open(api_file, 'r', encoding='utf-8') as f:
    api_content = f.read()

pattern = r'id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*brand:\s*"([^"]+)"'
matches = re.findall(pattern, api_content)

print(f"Found {len(matches)} perfumes to process.")

url_map = {}
ddgs = DDGS()

for pid, name, brand in matches:
    query = f"{name} {brand} perfume bottle white background Sephora OR Notino high res 100ml"
    print(f"Searching: {query}")
    try:
        results = list(ddgs.images(query, max_results=5))
        if results:
            filtered = [r['image'] for r in results if 'pinterest' not in r['image'] and 'fimgs.net/' not in r['image']]
            url = filtered[0] if filtered else results[0]['image']
            url_map[pid] = url
            print(f"  -> Found: {url}")
        else:
            print("  -> No image found")
    except Exception as e:
        print(f"  -> Error: {e}")
    time.sleep(4.5)  # Bypass Rate Limit!!

with open('image_urls.json', 'w', encoding='utf-8') as f:
    json.dump(url_map, f, indent=2)

print("\Done generating image_urls.json!")

