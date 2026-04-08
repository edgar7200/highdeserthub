with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Remove the remaining gray italic subtext at top of Featured
old = '''                <div className="pricing-period">per month</div>
                <div className="pricing-sub-tag">Be the first business customers see in your category.</div>
                <div className="pricing-features">'''
new = '''                <div className="pricing-period">per month</div>
                <div className="pricing-features">'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
