with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''                <a className="pricing-btn main" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Featured — $60/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Get Featured</a>'''
new = '''                <div style={{fontSize:"0.75rem",fontStyle:"italic",color:"var(--gold)",marginBottom:"0.75rem",lineHeight:"1.4"}}>Be the first business customers see in your category.</div>
                <a className="pricing-btn main" href="#" onClick={(e) => { e.preventDefault(); setShowPricing(false); handlePricingContact("Featured — $60/month"); }} style={{textDecoration:"none",textAlign:"center",display:"block"}}>Get Featured</a>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
