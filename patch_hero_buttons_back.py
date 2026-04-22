with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''          <div className="hero-stats">
            <div className="stat-pill">Find Local. Fast.</div>
            <div className="stat-pill">Helping Local Businesses Get Found.</div>
            <div className="stat-pill">Where Communities and Businesses Connect.</div>
          </div>
        </div>
      </section>'''
new = '''          <div style={{display:"flex",gap:"0.75rem",margin:"1.5rem 0",flexWrap:"wrap"}}>
            <button className="cta-btn-main" onClick={() => { setShowListForm(true); setFormSubmitted(false); }}>List My Business — Free</button>
            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)}>Get More Visibility →</button>
          </div>
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
