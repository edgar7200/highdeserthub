with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''          <li><a href="#">Local Events</a></li>
          <li><a href="#">Jobs</a></li>'''
new = '''          <li><a href="#" style={{background:"var(--gold)",color:"var(--navy)",padding:"0.4rem 1rem",borderRadius:"4px",fontWeight:700}}}>Local Events</a></li>
          <li><a href="#" style={{background:"var(--terra)",color:"white",padding:"0.4rem 1rem",borderRadius:"4px",fontWeight:700}}}>Jobs</a></li>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
