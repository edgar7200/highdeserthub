with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = ".living-page { position: fixed; inset: 0; background: var(--sand); z-index: 500; overflow-y: auto; }"
new = ".living-page { position: fixed; inset: 0; background: #080808; z-index: 500; overflow-y: auto; }"
src = src.replace(old, new)

old = ".living-section { background: var(--cream); border: 1.5px solid #E8DDD0; border-radius: 16px; overflow: hidden; }"
new = ".living-section { background: #141414; border: 1px solid rgba(201,168,76,0.12); border-radius: 2px; overflow: hidden; }"
src = src.replace(old, new)

old = ".living-section-header { padding: 1.5rem 2rem; border-bottom: 1.5px solid #E8DDD0; display: flex; align-items: center; gap: 1rem; }"
new = ".living-section-header { padding: 1.5rem 2rem; border-bottom: 1px solid rgba(201,168,76,0.1); display: flex; align-items: center; gap: 1rem; }"
src = src.replace(old, new)

old = ".living-section-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); }"
new = ".living-section-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: var(--sand); }"
src = src.replace(old, new)

old = ".living-item { display: flex; gap: 1rem; align-items: flex-start; padding-bottom: 1.25rem; border-bottom: 1px solid #EDE5D8; }"
new = ".living-item { display: flex; gap: 1rem; align-items: flex-start; padding-bottom: 1.25rem; border-bottom: 1px solid rgba(201,168,76,0.08); }"
src = src.replace(old, new)

old = ".living-item-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--ink); margin-bottom: 0.35rem; }"
new = ".living-item-title { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 600; color: var(--sand); margin-bottom: 0.35rem; }"
src = src.replace(old, new)

old = ".living-item-desc { font-size: 0.85rem; color: #5C5248; line-height: 1.6; }"
new = ".living-item-desc { font-size: 0.85rem; color: rgba(245,240,232,0.45); line-height: 1.6; }"
src = src.replace(old, new)

old = ".living-item-link { display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem; color: var(--terra); font-size: 0.8rem; font-weight: 600; text-decoration: none; }"
new = ".living-item-link { display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem; color: var(--gold); font-size: 0.8rem; font-weight: 600; text-decoration: none; }"
src = src.replace(old, new)

old = ".living-resource-card { background: #F7F0E6; border: 1.5px solid #E8DDD0; border-radius: 10px; padding: 1rem 1.25rem; }"
new = ".living-resource-card { background: #1A1A1A; border: 1px solid rgba(201,168,76,0.1); border-radius: 2px; padding: 1rem 1.25rem; }"
src = src.replace(old, new)

old = ".living-resource-card-title { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; color: var(--ink); margin-bottom: 0.5rem; }"
new = ".living-resource-card-title { font-family: 'Playfair Display', serif; font-size: 0.85rem; font-weight: 700; color: var(--sand); margin-bottom: 0.5rem; }"
src = src.replace(old, new)

old = ".living-resource-row { display: flex; justify-content: space-between; font-size: 0.78rem; padding: 0.25rem 0; border-bottom: 1px solid #EDE5D8; color: #5C5248; }"
new = ".living-resource-row { display: flex; justify-content: space-between; font-size: 0.78rem; padding: 0.25rem 0; border-bottom: 1px solid rgba(201,168,76,0.08); color: rgba(245,240,232,0.5); }"
src = src.replace(old, new)

old = ".living-resource-phone { color: var(--terra); font-weight: 600; }"
new = ".living-resource-phone { color: var(--gold); font-weight: 600; }"
src = src.replace(old, new)

old = ".living-section-sub { font-size: 0.82rem; color: var(--muted); margin-top: 0.15rem; }"
new = ".living-section-sub { font-size: 0.82rem; color: rgba(245,240,232,0.35); margin-top: 0.15rem; }"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
