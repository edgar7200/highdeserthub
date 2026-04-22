with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = "body { font-family: 'DM Sans', sans-serif; background: #F7F0E6; color: #1A1208; min-height: 100vh; }"
new = "body { font-family: 'Outfit', sans-serif; background: #080808; color: #F5F0E8; min-height: 100vh; }"
assert src.count(old) == 1, f"body not found (count={src.count(old)})"
src = src.replace(old, new)

old = "  --sand: #F7F0E6; --terra: #C4603A; --rust: #8B3A1A; --gold: #E8A030;\n  --ink: #1A1208; --navy: #0D1B2A; --cream: #FDF8F2; --muted: #9A8E82;"
new = "  --sand: #F5F0E8; --terra: #C9A84C; --rust: #A07830; --gold: #C9A84C;\n  --ink: #F5F0E8; --navy: #101010; --cream: #141414; --muted: #888880;\n  --card-bg: #141414; --border: rgba(201,168,76,0.15); --border-hover: rgba(201,168,76,0.5);"
assert src.count(old) == 1, f"root vars not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
