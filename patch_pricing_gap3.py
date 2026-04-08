with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '.pricing-period { font-size: 0.78rem; color: var(--muted); margin-bottom: 1.25rem; }'
new = '.pricing-period { font-size: 0.78rem; color: var(--muted); margin-bottom: 0.5rem; }'
assert src.count(old) == 1, f"pricing-period not found"
src = src.replace(old, new)

old = '.pricing-tier { padding: 1.75rem 1.25rem; border-right: 1.5px solid #E8DDD0; border-bottom: 1.5px solid #E8DDD0; display: flex; flex-direction: column; }'
new = '.pricing-tier { padding: 1rem 1.25rem; border-right: 1.5px solid #E8DDD0; border-bottom: 1.5px solid #E8DDD0; display: flex; flex-direction: column; }'
assert src.count(old) == 1, f"pricing-tier not found"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
