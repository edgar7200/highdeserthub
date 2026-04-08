with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''        <div className="hero-eyebrow">📍 Victorville · Hesperia · Apple Valley · Adelanto</div>'''
new = '''        <div style={{display:"flex",gap:"0.75rem",justifyContent:"flex-start",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <button className="cta-btn-main" onClick={() => { setShowListForm(true); setFormSubmitted(false); }}>List My Business — Free</button>
          <button className="cta-btn-ghost" onClick={() => setShowPricing(true)} style={{borderColor:"var(--gold)",color:"var(--gold)"}}>Get More Visibility →</button>
        </div>
        <div className="hero-eyebrow">📍 Victorville · Hesperia · Apple Valley · Adelanto</div>'''
assert src.count(old) == 1, f"anchor not found"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
