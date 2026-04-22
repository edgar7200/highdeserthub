with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Fix form footer border
old = ".form-footer { padding: 1.25rem 2rem; border-top: 1.5px solid #E8DDD0; display: flex; gap: 0.75rem; }"
new = ".form-footer { padding: 1.25rem 2rem; border-top: 1px solid rgba(201,168,76,0.12); display: flex; gap: 0.75rem; }"
src = src.replace(old, new)

# Fix form note color
old = ".form-note { padding: 0 2rem 1.25rem; font-size: 0.78rem; color: var(--muted); line-height: 1.6; }"
new = ".form-note { padding: 0 2rem 1.25rem; font-size: 0.78rem; color: rgba(245,240,232,0.4); line-height: 1.6; }"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
