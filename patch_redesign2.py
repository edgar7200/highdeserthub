with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Fix duplicate carousel CSS by replacing all occurrences
src = src.replace(
    ".carousel-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }",
    ".carousel-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); letter-spacing: 0; }"
)

src = src.replace(
    ".carousel-card { background: rgba(255,255,255,0.18); border: 1.5px solid rgba(247,240,230,0.5); border-radius: 14px; padding: 1.75rem; flex: 1; min-width: 280px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }",
    ".carousel-card { background: #1A1A1A; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; padding: 1.75rem; flex: 1; min-width: 280px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }"
)

src = src.replace(
    ".carousel-card:hover { border-color: rgba(232,160,48,0.4); background: rgba(255,255,255,0.08); transform: translateY(-3px); }",
    ".carousel-card:hover { border-color: rgba(201,168,76,0.4); background: #1E1E1E; transform: translateY(-3px); }"
)

src = src.replace(
    ".carousel-biz-name { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 800; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }",
    ".carousel-biz-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 600; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }"
)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
