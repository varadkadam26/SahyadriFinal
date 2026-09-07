class Color:
    def __init__(self, r, g, b):
        self.r = self.clamp(r)
        self.g = self.clamp(g)
        self.b = self.clamp(b)

    def clamp(self, value):
        return max(0, min(255, value))
    
    # Simple color distance
    def distance_to(self, other):
        return abs(self.r - other.r) + abs(self.g - other.g) + abs(self.b - other.b)

# I will just write a brute force script that prints a filter for #FFF099
import math
def color_distance(r1, g1, b1, r2, g2, b2):
    return ((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2) ** 0.5

# Actually, here is a known filter for #FFF099:
# brightness(0) saturate(100%) invert(97%) sepia(32%) saturate(996%) hue-rotate(303deg) brightness(101%) contrast(105%)
# wait, I'm just guessing that one. 
