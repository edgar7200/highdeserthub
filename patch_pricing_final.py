with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Remove Free sub-tag
old = '''                <div className="pricing-sub-tag">Perfect for getting your business online in minutes.</div>
                <div className="pricing-features">'''
new = '''                <div className="pricing-features">'''
assert src.count(old) == 1, f"free subtag not found"
src = src.replace(old, new)

# Remove Standard sub-tag
old = '''                <div className="pricing-sub-tag">Turn views into real customer inquiries.</div>
                <div className="pricing-features">'''
new = '''                <div className="pricing-features">'''
assert src.count(old) == 1, f"standard subtag not found"
src = src.replace(old, new)

# Remove Premium sub-tag
old = '''                <div className="pricing-sub-tag">Everything in Featured, plus we work for you every month.</div>
                <div className="pricing-features">'''
new = '''                <div className="pricing-features">'''
assert src.count(old) == 1, f"premium subtag not found"
src = src.replace(old, new)

# Remove flex:1 from pricing-features so it doesn't stretch
old = '''.pricing-features { display: flex; flex-direction: column; gap: 0.6rem; flex: 1; margin-bottom: 1.5rem; }'''
new = '''.pricing-features { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 1.5rem; }'''
assert src.count(old) == 1, f"pricing-features css not found"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
