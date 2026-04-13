with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''              <button className="btn-card" onClick={() => setCardViewer(selectedBiz)}>🪪 View Card</button>'''
new = '''              <button className="btn-card" onClick={() => { setCardViewer(selectedBiz); if(window.gtag) window.gtag('event', 'card_view', { business_name: selectedBiz.name, business_city: selectedBiz.city, business_category: selectedBiz.category, business_tier: selectedBiz.tier }); }}>🪪 View Card</button>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
