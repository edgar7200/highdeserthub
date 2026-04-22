with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Add forced dark styles at the end of CSS
old = "/* END OF CSS */"
new = """.contact-popup .form-input, .contact-popup .form-select, .contact-popup .form-textarea { background: #1A1A1A !important; color: #F5F0E8 !important; border: 1px solid rgba(201,168,76,0.2) !important; border-radius: 2px !important; -webkit-appearance: none; }
.contact-popup .form-input::placeholder, .contact-popup .form-textarea::placeholder { color: rgba(245,240,232,0.3) !important; }
.contact-popup select option { background: #1A1A1A; color: #F5F0E8; }
/* END OF CSS */"""
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
