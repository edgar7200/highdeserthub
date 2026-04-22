with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''      <section className="hero">
        <div className="hero-inner">
          <div style={{display:"flex",gap:"0.75rem",justifyContent:"flex-start",marginBottom:"1.25rem",flexWrap:"wrap"}}>
          <button className="cta-btn-main" onClick={() => { setShowListForm(true); setFormSubmitted(false); }}>List My Business — Free</button>
          <button className="cta-btn-ghost" onClick={() => setShowPricing(true)} style={{borderColor:"var(--gold)",color:"var(--gold)"}}>Get More Visibility →</button>
        </div>
        <div className="hero-eyebrow">📍 Victorville · Hesperia · Apple Valley · Adelanto</div>
          <h1 className="hero-title">Your High Desert<br />Business Directory</h1>
          <p className="hero-sub">Helping local businesses get found. Connect with local services across Victorville, Hesperia, Apple Valley, and Adelanto.</p>
          <div className="hero-stats">
            <div className="stat-pill">Find Local. Fast.</div>
            <div className="stat-pill">Helping Local Businesses Get Found.</div>
            <div className="stat-pill">Where Communities and Businesses Connect.</div>
          </div>
        </div>
      </section>'''
new = '''      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">📍 Victorville · Hesperia · Apple Valley · Adelanto</div>
          <h1 className="hero-title">Your High Desert<br />Business Directory</h1>
          <p className="hero-sub">Helping local businesses get found. Connect with local services across Victorville, Hesperia, Apple Valley, and Adelanto.</p>
          <div className="hero-stats">
            <div className="stat-pill">Find Local. Fast.</div>
            <div className="stat-pill">Helping Local Businesses Get Found.</div>
            <div className="stat-pill">Where Communities and Businesses Connect.</div>
          </div>
        </div>
      </section>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
