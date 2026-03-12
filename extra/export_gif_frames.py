import tarfile
import os
from PIL import Image, ImageSequence
import tempfile

# -------- CONFIG ----------
archive_path = "textures.tar.xz"
internal_path = "textures/map"
background_gif_name = "plain.gif"

output_dir = "gif_frames_with_bg"
os.makedirs(output_dir, exist_ok=True)

# -------- STEP 1: Extract archive ----------
temp_dir = tempfile.TemporaryDirectory()

with tarfile.open(archive_path, "r:xz") as tar:
    members = [m for m in tar.getmembers() if m.name.startswith(internal_path)]
    tar.extractall(path=temp_dir.name, members=members)

gif_folder = os.path.join(temp_dir.name, internal_path)

# -------- STEP 2: Load background ----------
background_path = os.path.join(gif_folder, background_gif_name)

with Image.open(background_path) as bg_gif:
    bg_frame = next(ImageSequence.Iterator(bg_gif)).convert("RGBA")

bg_w, bg_h = bg_frame.size

# -------- STEP 3: Determine max frame size ----------
max_w = bg_w
max_h = bg_h

for filename in os.listdir(gif_folder):

    if not filename.lower().endswith(".gif"):
        continue

    gif_path = os.path.join(gif_folder, filename)

    with Image.open(gif_path) as gif:
        for frame in ImageSequence.Iterator(gif):
            w, h = frame.size
            max_w = max(max_w, w)
            max_h = max(max_h, h)

# -------- STEP 4: Process frames ----------
for filename in os.listdir(gif_folder):

    if not filename.lower().endswith(".gif"):
        continue

    gif_path = os.path.join(gif_folder, filename)

    with Image.open(gif_path) as gif:

        for frame_index, frame in enumerate(ImageSequence.Iterator(gif)):

            frame_rgba = frame.convert("RGBA")
            fw, fh = frame_rgba.size

            # Transparent canvas
            canvas = Image.new("RGBA", (max_w, max_h), (0, 0, 0, 0))

            # Paste background bottom-left
            canvas.paste(bg_frame, (0, max_h - bg_h), bg_frame)

            # Paste overlay frame bottom-left
            canvas.paste(frame_rgba, (0, max_h - fh), frame_rgba)

            name = os.path.splitext(filename)[0]
            output_name = f"{name}_{frame_index}.png"

            output_path = os.path.join(output_dir, output_name)
            canvas.save(output_path)

print("Finished. PNGs saved to:", output_dir)

# -------- CLEANUP ----------
temp_dir.cleanup()