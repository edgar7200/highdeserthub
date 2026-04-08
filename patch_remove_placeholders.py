with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

src = src.replace('                <div style={{minHeight:"3rem"}}></div>\n', '')

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
