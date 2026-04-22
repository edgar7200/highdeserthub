with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = ".announcement-banner-text { color: rgba(247,240,230,0.85); font-size: 0.8rem; font-weight: 500; line-height: 1.5; }"
new = ".announcement-banner-text { color: rgba(245,240,232,0.9); font-size: 0.8rem; font-weight: 500; line-height: 1.5; }"
src = src.replace(old, new)

old = ".announcement-banner-text strong { color: var(--gold); font-weight: 700; }"
new = ".announcement-banner-text strong { color: var(--gold); font-weight: 700; }"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
