with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''          <li><a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); setShowListForm(true); setFormSubmitted(false); }}>List Your Business</a></li>'''
new = ''''''
assert src.count(old) == 1, f"anchor not found"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
