import json
import hashlib

with open("terrain_pixels.json", "r") as f:
    sigs = json.load(f)

hashes = {}

for k, v in sigs.items():
    # s = json.dumps(v, sort_keys=True)
    # print(s)
    # key = hashlib.sha1(s.encode()).hexdigest()
    # hashes[key] = k
    items = sorted(((int(i), p) for i, p in v.items()))
    s = "{" + ", ".join(f"{i}: {p}" for i, p in items) + "}"
    hashes[s] = k

print(json.dumps(hashes, indent=4))