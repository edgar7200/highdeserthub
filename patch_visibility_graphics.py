with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Fix hero Get More Visibility button to match gold style
old = '''            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)}>Get More Visibility →</button>'''
new = '''            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)} style={{borderColor:"var(--gold)",color:"var(--gold)"}}>Get More Visibility →</button>'''
assert src.count(old) == 1, f"hero button anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# Fix graphics popup background and inputs
old = '''.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }'''
new = '''.contact-popup-btns { display: flex; gap: 0.75rem; flex-direction: column; }
.contact-popup input, .contact-popup select, .contact-popup textarea { background: #1A1A1A !important; color: var(--sand) !important; border: 1px solid rgba(201,168,76,0.2) !important; border-radius: 2px !important; }
.contact-popup input::placeholder, .contact-popup textarea::placeholder { color: rgba(245,240,232,0.25) !important; }'''
assert src.count(old) == 1, f"popup btns anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
