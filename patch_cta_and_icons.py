with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# 1. Gold outline for "View Pricing Plans" button + new copy
old = '''            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)}>View Pricing Plans</button>'''
new = '''            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)} style={{borderColor:"var(--gold)",color:"var(--gold)"}}>Get More Visibility →</button>'''
assert src.count(old) == 1, f"cta button anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# 2. Add IG + FB icons to Standard bullet
old = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> Clickable website, Instagram, and Facebook links</div>'''
new = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> Clickable website, <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline",verticalAlign:"middle",margin:"0 2px"}}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> Instagram and <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#1877F2" style={{display:"inline",verticalAlign:"middle",margin:"0 2px"}}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> Facebook links</div>'''
assert src.count(old) == 1, f"standard bullet anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
