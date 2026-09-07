from PIL import Image
import sys

def remove_white(image_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    datas = img.getdata()

    new_data = []
    # threshold for white (e.g. R, G, B all > 235)
    for item in datas:
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(image_path, "PNG")
    print(f"Processed {image_path}")

try:
    remove_white("public/images/royal_farman_scroll.png")
except Exception as e:
    print(f"Error: {e}")
