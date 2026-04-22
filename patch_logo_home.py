with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''        <div className="nav-logo">High<span>Desert</span>Hub</div>'''
new = '''        <div className="nav-logo" style={{cursor:"pointer"}} onClick={() => { setActiveCategory(null); setActiveCity("All Cities"); setSearchInput(""); setShowLiving(false); window.scrollTo({top:0,behavior:"smooth"}); }}>High<span>Desert</span>Hub</div>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
