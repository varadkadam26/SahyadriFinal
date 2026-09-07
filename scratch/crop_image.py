from PIL import Image

def crop_red_borders(image_path):
    img = Image.open(image_path)
    
    # Original image is 1250 x 771
    # We want to crop out the red border in the middle of the scroll.
    # The scroll ends and handles are approx at left/right 150px each.
    # The top/bottom wooden rollers are approx at top/bottom 150px each.
    # We will crop the inner rectangle of the image and paste the plain parchment texture over the red borders.
    
    # Instead of doing complex masking, let's just create a new image that cuts out the center red border
    # Or simply crop the whole image inwards using CSS. 
    pass

if __name__ == "__main__":
    crop_red_borders("public/images/royal_farman_scroll.png")
