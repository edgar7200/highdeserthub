with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# 1. Add "No contracts" + social proof under header
old = '''            <div className="pricing-header-title">Simple, Honest Pricing</div>
              <div className="pricing-header-sub">Start free. Upgrade when you're ready to grow.</div>'''
new = '''            <div className="pricing-header-title">Simple, Honest Pricing</div>
              <div className="pricing-header-sub">No contracts. Cancel anytime.</div>
              <div className="pricing-header-sub">Start free. Upgrade when you're ready to grow.</div>
              <div style={{marginTop:"0.5rem",fontSize:"0.78rem",color:"rgba(247,240,230,0.4)"}}>Join 119+ local businesses already listed.</div>'''
assert src.count(old) == 1, f"header anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# 2. Free tier — add Get Listed Free button
old = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> 3-month renewal required</div>
                </div>
                <button className="pricing-btn" onClick={() => { setShowPricing(false); setShowListForm(true); setFormSubmitted(false); }}>Get Listed Free</button>'''
new = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> 3-month renewal required</div>
                </div>
                <button className="pricing-btn main" onClick={() => { setShowPricing(false); setShowListForm(true); setFormSubmitted(false); }}>Get Listed Free</button>'''
assert src.count(old) == 1, f"free tier button anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# 3. Standard — rewrite bullets
old = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free — no renewal ever</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Website and social media links</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Email contact button and full hours</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority over free listings</div>'''
new = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free — no renewal ever</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Clickable website, Instagram, and Facebook links</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> One-tap email copy for customers</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority over free listings</div>'''
assert src.count(old) == 1, f"standard bullets anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# 4. Featured — update carousel bullet
old = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel feature</div>'''
new = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel with social media icons</div>'''
assert src.count(old) == 1, f"featured carousel bullet anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# 5. Premium — add hook line under price
old = '''                <div className="pricing-period">per month</div>
                <div className="pricing-sub-tag">Own your category. Be the only name they remember.</div>'''
new = '''                <div className="pricing-period">per month</div>
                <div className="pricing-sub-tag">Everything in Featured, plus we work for you every month.</div>'''
assert src.count(old) == 1, f"premium hook anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
