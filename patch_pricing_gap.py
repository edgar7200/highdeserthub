with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Add placeholder to Free tier
old = '''                <div className="pricing-sub-tag">Perfect for getting your business online in minutes.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business name and phone listed</div>'''
new = '''                <div className="pricing-sub-tag">Perfect for getting your business online in minutes.</div>
                <div style={{minHeight:"3rem"}}></div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business name and phone listed</div>'''
assert src.count(old) == 1, f"free gap anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# Add placeholder to Standard tier
old = '''                <div className="pricing-sub-tag">Turn views into real customer inquiries.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free — no renewal ever</div>'''
new = '''                <div className="pricing-sub-tag">Turn views into real customer inquiries.</div>
                <div style={{minHeight:"3rem"}}></div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free — no renewal ever</div>'''
assert src.count(old) == 1, f"standard gap anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# Add placeholder to Premium tier
old = '''                <div className="pricing-sub-tag">Everything in Featured, plus we work for you every month.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Featured</div>'''
new = '''                <div className="pricing-sub-tag">Everything in Featured, plus we work for you every month.</div>
                <div style={{minHeight:"3rem"}}></div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Featured</div>'''
assert src.count(old) == 1, f"premium gap anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
