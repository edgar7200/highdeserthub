with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Remove the absolute positioned badge
old = '''                <div className="pricing-popular-badge">Most Popular</div>
                <div className="pricing-tier-name">Featured</div>'''
new = '''                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.25rem"}}>
                  <div className="pricing-tier-name" style={{marginBottom:0}}>Featured</div>
                  <span style={{background:"var(--gold)",color:"var(--navy)",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"0.2rem 0.6rem",borderRadius:"2rem",whiteSpace:"nowrap"}}>Most Popular</span>
                </div>'''
assert src.count(old) == 1, f"anchor not found"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
