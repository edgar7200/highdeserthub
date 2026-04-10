with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Fix the nav links to use classes
old = '''          <li><a href="#" style={{background:"var(--gold)",color:"var(--navy)",padding:"0.4rem 1rem",borderRadius:"4px",fontWeight:700}}}>Local Events</a></li>
          <li><a href="#" style={{background:"var(--terra)",color:"white",padding:"0.4rem 1rem",borderRadius:"4px",fontWeight:700}}}>Jobs</a></li>'''
new = '''          <li><a href="#" className="nav-btn-gold">Local Events</a></li>
          <li><a href="#" className="nav-btn-terra">Jobs</a></li>'''
assert src.count(old) == 1, f"nav anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# Add CSS classes
old = '.nav-cta { background: var(--terra); color: white !important; padding: 0.5rem 1.25rem; border-radius: 4px; font-weight: 600 !important; }'
new = '''.nav-cta { background: var(--terra); color: white !important; padding: 0.5rem 1.25rem; border-radius: 4px; font-weight: 600 !important; }
.nav-btn-gold { background: var(--gold) !important; color: var(--navy) !important; padding: 0.4rem 1rem !important; border-radius: 4px !important; font-weight: 700 !important; }
.nav-btn-gold:hover { background: #d4911f !important; color: var(--navy) !important; }
.nav-btn-terra { background: var(--terra) !important; color: white !important; padding: 0.4rem 1rem !important; border-radius: 4px !important; font-weight: 700 !important; }
.nav-btn-terra:hover { background: var(--rust) !important; color: white !important; }'''
assert src.count(old) == 1, f"css anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
