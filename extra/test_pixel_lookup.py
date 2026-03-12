import base64
from io import BytesIO
import json
import numpy as np
from PIL import Image

# -------- CONFIG ----------
b64_png = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAABS0lEQVR4AZyTLVYDQRCE+61CRuYISCRHQHIEJHJlZGRkS46BRCI5AhLZMhIX9ptJz/RMZvN4yUtt/1RNbfcmO8nKZ36xU4+RdGjAwe28kR70e5MLA0Qc7IXU9OHJHRcGThBNj2KaQT3CqoHpsdGbtrWTqwaM6yJiX9MD0+fPwymCpmm+G4ccsR/10/buLD7H5/0T2mZ30/ocnE+i5TLZ70be9x/ytvsSzMDSX/06zxlQJ1h+d0wAp+PoXhPhOQhPnSYg6WFax4YzzauSR5QJaLor+TVEXZnANN8hkiMT502zvvkfmOYmIgcmnhOpTbOOvKwwIhH0MK2H4coKFJgAcmCaH6RpjfQjmhUiQY7ZNaApK1DM9zuCeExFuHjfI1Szgn4f6InHVISL9z1ClQlM656m/8uTAe8Cya1ID5E37PXwKERADjwnAu/F/A8AAP//rDav2AAAAAZJREFUAwAn2eJ9SyNuuQAAAABJRU5ErkJggg=="
json_file = "terrain_pixels.json"

# -------- STEP 1: Load JSON ----------
with open(json_file, "r") as f:
    terrain_data = json.load(f)

# -------- STEP 2: Decode PNG ----------
png_data = base64.b64decode(b64_png)
img = Image.open(BytesIO(png_data)).convert("RGBA")

w, h = img.size
arr = np.array(img).reshape(-1, 4)

# -------- STEP 3: Reverse flattened pixels to match JSON ----------
arr_rev = arr[::-1]

# -------- STEP 4: Helper to swap JSON channels ----------
def swap_rgba_channels(rgba):
    """Swap JSON channels from [A,B,G,R] -> [R,G,B,A] for comparison"""
    return [rgba[3], rgba[2], rgba[1], rgba[0]]

# -------- STEP 5: Match PNG against terrain groups ----------
match_found = None

for terrain, pixels in terrain_data.items():
    match = True
    for idx_str, rgba_json in pixels.items():
        idx = int(idx_str)
        if idx < 0 or idx >= arr_rev.shape[0]:
            match = False
            break
        rgba_png = arr_rev[idx].tolist()
        if rgba_png != swap_rgba_channels(rgba_json):
            match = False
            break
    if match:
        match_found = terrain
        break

# -------- STEP 6: Print results ----------
if match_found:
    print(f"PNG matches terrain group: {match_found}")
    print("\nSample PNG signature at differentiating pixels:")
    for idx_str, rgba_json in terrain_data[match_found].items():
        idx = int(idx_str)
        print(f"Index {idx}: {arr_rev[idx].tolist()}  | JSON: {swap_rgba_channels(rgba_json)}")
else:
    print("No matching terrain group found.")