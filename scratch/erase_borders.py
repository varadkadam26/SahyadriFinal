from PIL import Image

def remove_red_borders(image_path):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    # 1. Grab a patch of clean parchment from the center
    # Image size is 1250 x 771. Center is roughly at 625, 385.
    patch = img.crop((500, 300, 750, 450)) # 250x150 patch
    
    # 2. Define the region to cover (the red borders and everything inside them)
    # We want to leave the torn paper edges intact.
    # The red border roughly goes from x=190 to 1060, and y=180 to 590
    cover_box = (195, 185, 1055, 585)
    
    # 3. Tile the patch over the cover_box
    for y in range(cover_box[1], cover_box[3], patch.height):
        for x in range(cover_box[0], cover_box[2], patch.width):
            # Calculate the paste box, ensuring we don't go outside cover_box
            paste_w = min(patch.width, cover_box[2] - x)
            paste_h = min(patch.height, cover_box[3] - y)
            
            cropped_patch = patch.crop((0, 0, paste_w, paste_h))
            img.paste(cropped_patch, (x, y))
            
    # 4. Save
    img.save(image_path, "PNG")
    print("Done erasing borders.")

if __name__ == "__main__":
    remove_red_borders("public/images/royal_farman_scroll.png")
