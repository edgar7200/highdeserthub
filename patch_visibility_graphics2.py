with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Fix hero Get More Visibility button
old = '''            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)}>Get More Visibility →</button>'''
new = '''            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)} style={{borderColor:"var(--gold)",color:"var(--gold)"}}>Get More Visibility →</button>'''
assert src.count(old) == 1, f"hero button not found (count={src.count(old)})"
src = src.replace(old, new)

# Fix graphics popup inputs with a new CSS class appended once
marker = "/* END OF CSS */"
if marker not in src:
    # Find the closing backtick of the css template literal
    css_end = src.find("\n`;\n\n\nconst SHEETS_URL")
    if css_end == -1:
        css_end = src.find("\n`;\n\nconst SHEETS_URL")
    insert = "\n.contact-popup input, .contact-popup select, .contact-popup textarea { background: #1A1A1A !important; color: var(--sand) !important; border: 1px solid rgba(201,168,76,0.2) !important; border-radius: 2px !important; }\n.contact-popup input::placeholder, .contact-popup textarea::placeholder { color: rgba(245,240,232,0.25) !important; }\n/* END OF CSS */"
    src = src[:css_end] + insert + src[css_end:]
    print("CSS injected.")
else:
    print("CSS already injected, skipping.")

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
