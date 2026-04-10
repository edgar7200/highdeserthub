with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''          <li><a href="#">Browse</a></li>
          <li><a href="#">Cities Served</a></li>
          <li><a href="#">Jobs</a></li>'''
new = '''          <li><a href="#">Local Events</a></li>
          <li><a href="#">Jobs</a></li>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
