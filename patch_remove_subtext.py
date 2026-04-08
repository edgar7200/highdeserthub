with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''            <p className="contact-popup-sub">
              You selected <strong>{contactTier}</strong>. Reach out and we'll get you set up right away.
            </p>
            {contactTier === "Social Media Graphics" ?'''
new = '''            {contactTier === "Social Media Graphics" ?'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
