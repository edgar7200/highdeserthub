with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''.contact-popup { background: var(--cream); border-radius: 16px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.3); text-align: center; }'''
new = '''.contact-popup { background: #141414; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; max-width: 420px; width: 100%; padding: 2rem; box-shadow: 0 24px 80px rgba(0,0,0,0.8); text-align: center; }'''
src = src.replace(old, new)

old = '''.contact-popup-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }'''
new = '''.contact-popup-title { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: var(--sand); margin-bottom: 0.5rem; }'''
src = src.replace(old, new)

old = '''.contact-popup-sub { font-size: 0.875rem; color: var(--muted); margin-bottom: 1.5rem; line-height: 1.6; }'''
new = '''.contact-popup-sub { font-size: 0.875rem; color: rgba(245,240,232,0.4); margin-bottom: 1.5rem; line-height: 1.6; }'''
src = src.replace(old, new)

old = '''.contact-popup-email { background: #EDE5D8; border-radius: 8px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--terra); margin-bottom: 1.25rem; letter-spacing: 0.01em; }'''
new = '''.contact-popup-email { background: rgba(201,168,76,0.08); border-radius: 2px; padding: 0.85rem 1rem; font-size: 0.95rem; font-weight: 600; color: var(--gold); margin-bottom: 1.25rem; letter-spacing: 0.01em; border: 1px solid rgba(201,168,76,0.2); }'''
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
