import os
import json
import numpy as np
from PIL import Image
from collections import defaultdict

# -------- CONFIG ----------
image_folder = "gif_frames_with_bg"
output_json = "terrain_pixels.json"

# -------- STEP 1: Load images ----------
groups = defaultdict(list)

for filename in os.listdir(image_folder):

    if not filename.lower().endswith(".png"):
        continue

    base = filename.rsplit("_", 1)[0]  # group by base name

    path = os.path.join(image_folder, filename)

    img = Image.open(path).convert("RGBA")

    arr = np.array(img).reshape(-1, 4)

    groups[base].append(arr)

# -------- STEP 2: Reduce each group to representative pixels ----------
# Reverse the flattened pixel order before creating the representative
group_arrays = []
group_names = []

for name, frames in groups.items():

    frames = np.array(frames)

    # take first frame as representative, reverse flattened pixel order
    rep = frames[0].copy()
    rep_flat = rep.view(np.uint32).flatten()[::-1]  # reversed

    group_arrays.append(rep_flat)
    group_names.append(name)

group_arrays = np.array(group_arrays)

num_groups, num_pixels = group_arrays.shape

# -------- STEP 3: Greedy differentiating pixels ----------
remaining = set(range(num_pixels))
selected = set()

pairs = {(i, j) for i in range(num_groups) for j in range(i + 1, num_groups)}

while pairs and remaining:

    best_pixel = max(
        remaining,
        key=lambda p: sum(group_arrays[i, p] != group_arrays[j, p] for (i, j) in pairs)
    )

    selected.add(best_pixel)
    remaining.remove(best_pixel)

    pairs = {
        (i, j)
        for (i, j) in pairs
        if group_arrays[i, best_pixel] == group_arrays[j, best_pixel]
    }

print("Pixels needed:", len(selected))

# -------- STEP 4: Save JSON ----------
pixel_data = {}

for idx, name in enumerate(group_names):

    pixel_data[name] = {}

    for p in selected:

        val = group_arrays[idx, p]

        pixel_data[name][int(p)] = (
            int((val >> 24) & 255),
            int((val >> 16) & 255),
            int((val >> 8) & 255),
            int(val & 255),
        )

with open(output_json, "w") as f:
    json.dump(pixel_data, f, indent=2)

print("Saved:", output_json)