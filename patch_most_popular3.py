with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.25rem"}}>
                  <div className="pricing-tier-name" style={{marginBottom:0}}>Featured</div>
                  <span style={{background:"var(--gold)",color:"var(--navy)",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"0.2rem 0.6rem",borderRadius:"2rem",whiteSpace:"nowrap"}}>Most Popular</span>
                </div>'''
new = '''                <div className="pricing-tier-name">Featured</div>'''
assert src.count(old) == 1, f"anchor not found"
src = src.replace(old, new)

# Add badge after the gold subtext at bottom
old = '''                <div style={{fontSize:"0.75rem",fontStyle:"italic",color:"var(--gold)",marginBottom:"0.75rem",lineHeight:"1.4"}}>Be the first business customers see in your category.</div>'''
new = '''                <div style={{fontSize:"0.75rem",fontStyle:"italic",color:"var(--gold)",marginBottom:"0.5rem",lineHeight:"1.4"}}>Be the first business customers see in your category.</div>
                <div style={{marginBottom:"0.75rem"}}><span style={{background:"var(--gold)",color:"var(--navy)",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"0.25rem 0.75rem",borderRadius:"2rem"}}>⭐ Most Popular</span></div>'''
assert src.count(old) == 1, f"anchor not found"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
