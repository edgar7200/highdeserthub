with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '.pricing-popular-badge { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.75rem; border-radius: 0 0 6px 6px; }'
new = '.pricing-popular-badge { position: absolute; top: -28px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.75rem; border-radius: 6px 6px 0 0; white-space: nowrap; }'
assert src.count(old) == 1, f"anchor not found"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
