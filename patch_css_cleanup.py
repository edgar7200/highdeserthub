with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# Simple string replacements for CSS only (not JSX content)
# We'll do targeted replacements on the css string

replacements = [
    # Fonts
    ("font-family: 'Syne', sans-serif", "font-family: 'Playfair Display', serif"),
    ("font-family: 'DM Sans', sans-serif", "font-family: 'Outfit', sans-serif"),
    ('"DM Sans", sans-serif', "'Outfit', sans-serif"),
    # Colors - backgrounds
    ("background: var(--cream)", "background: #141414"),
    ("background: var(--navy)", "background: #101010"),
    ("background: var(--sand)", "background: #080808"),
    ("background: white", "background: #1A1A1A"),
    ("background: #F7F0E6", "background: #080808"),
    ("background: #FDF8F2", "background: #141414"),
    ("background: #0A1520", "background: #050505"),
    ("background: #F0EBE1", "background: #0A0A0A"),
    # Colors - text
    ("color: var(--ink)", "color: var(--sand)"),
    ("color: #1A1208", "color: #F5F0E8"),
    ("color: #5C5248", "color: rgba(245,240,232,0.5)"),
    ("color: #6B5A48", "color: rgba(201,168,76,0.7)"),
    ("color: var(--terra)", "color: var(--gold)"),
    # Colors - borders
    ("border: 1.5px solid #E8DDD0", "border: 1px solid rgba(201,168,76,0.12)"),
    ("border: 1px solid #E8DDD0", "border: 1px solid rgba(201,168,76,0.12)"),
    ("border-bottom: 1.5px solid #E8DDD0", "border-bottom: 1px solid rgba(201,168,76,0.1)"),
    ("border-bottom: 3px solid var(--terra)", "border-bottom: 1px solid rgba(201,168,76,0.2)"),
    ("border-top: 1.5px solid #E8DDD0", "border-top: 1px solid rgba(201,168,76,0.1)"),
    ("border-color: var(--terra)", "border-color: var(--gold)"),
    ("border: 1.5px solid var(--terra)", "border: 1px solid var(--gold)"),
    ("border-left: 3px solid var(--terra)", "border-left: 2px solid var(--gold)"),
    ("#E8DDD0", "rgba(201,168,76,0.15)"),
    ("#EDE5D8", "rgba(201,168,76,0.08)"),
    # Border radius - make sharper
    ("border-radius: 16px", "border-radius: 2px"),
    ("border-radius: 12px", "border-radius: 2px"),
    ("border-radius: 10px", "border-radius: 2px"),
    ("border-radius: 8px", "border-radius: 2px"),
    ("border-radius: 6px", "border-radius: 2px"),
    ("border-radius: 2rem", "border-radius: 2px"),
    ("border-radius: 4px", "border-radius: 2px"),
    # Terra color references
    ("rgba(196,96,58,0.15)", "rgba(201,168,76,0.08)"),
    ("rgba(196,96,58,0.3)", "rgba(201,168,76,0.2)"),
    ("rgba(196,96,58,0.4)", "rgba(201,168,76,0.3)"),
    ("rgba(196,96,58,0.12)", "rgba(201,168,76,0.08)"),
    ("rgba(196,96,58,0.2)", "rgba(201,168,76,0.1)"),
    ("rgba(196,96,58,0.08)", "rgba(201,168,76,0.06)"),
    ("rgba(196,96,58,0.1)", "rgba(201,168,76,0.08)"),
    # Navy references in CSS
    ("background: #0D1B2A", "background: #101010"),
    ("color: #0D1B2A", "color: #080808"),
    # Muted color
    ("color: var(--muted)", "color: rgba(245,240,232,0.35)"),
    # Strong ink
    ("color: var(--ink); font-weight: 700", "color: var(--sand); font-weight: 700"),
    ("color: var(--ink); font-weight: 800", "color: var(--sand); font-weight: 800"),
    # Admin page
    ("background: #F0EBE1", "background: #0A0A0A"),
    ("background: var(--cream); border-radius", "background: #141414; border-radius"),
    # Pricing modal
    ("background: var(--cream); border-radius: 16px; max-width: 820px", "background: #141414; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; max-width: 820px"),
    # Report modal
    ("background: var(--cream); border-radius: 16px; max-width: 440px", "background: #141414; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; max-width: 440px"),
    # Contact popup
    ("background: var(--cream); border-radius: 16px; max-width: 420px", "background: #141414; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; max-width: 420px"),
    # Pricing tier
    ("background: #EDE5D8", "background: rgba(201,168,76,0.08)"),
    ("background: #EDE5D8; color: var(--ink)", "background: rgba(201,168,76,0.08); color: var(--sand)"),
    # Card viewer
    ("background: rgba(255,255,255,0.06)", "background: rgba(255,255,255,0.03)"),
    ("background: rgba(255,255,255,0.1)", "background: rgba(255,255,255,0.05)"),
    ("background: rgba(255,255,255,0.2)", "background: rgba(255,255,255,0.08)"),
    # Pricing
    ("color: #1A1208; letter-spacing", "color: var(--sand); letter-spacing"),
    (".pricing-tier-name { font-family: 'Syne', sans-serif", ".pricing-tier-name { font-family: 'Playfair Display', serif"),
    (".pricing-price { font-family: 'Syne', sans-serif", ".pricing-price { font-family: 'Playfair Display', serif"),
    (".pricing-header-title { font-family: 'Syne', sans-serif", ".pricing-header-title { font-family: 'Playfair Display', serif"),
    # Admin
    (".admin-nav-title { font-family: 'Syne', sans-serif", ".admin-nav-title { font-family: 'Playfair Display', serif"),
    (".admin-gate-title { font-family: 'Syne', sans-serif", ".admin-gate-title { font-family: 'Playfair Display', serif"),
    (".admin-stat-num { font-family: 'Syne', sans-serif", ".admin-stat-num { font-family: 'Playfair Display', serif"),
    # Report
    (".report-title { font-family: 'Syne', sans-serif", ".report-title { font-family: 'Playfair Display', serif"),
    (".success-title { font-family: 'Syne', sans-serif", ".success-title { font-family: 'Playfair Display', serif"),
    # Contact popup title
    (".contact-popup-title { font-family: 'Syne', sans-serif", ".contact-popup-title { font-family: 'Playfair Display', serif"),
    # Carousel avatar font
    (".carousel-avatar { width: 56px; height: 56px; border-radius: 10px", ".carousel-avatar { width: 56px; height: 56px; border-radius: 2px"),
    (".biz-avatar { width: 48px; height: 48px; border-radius: 8px", ".biz-avatar { width: 48px; height: 48px; border-radius: 2px"),
    (".modal-avatar { width: 64px; height: 64px; border-radius: 12px", ".modal-avatar { width: 64px; height: 64px; border-radius: 2px"),
]

count = 0
for old, new in replacements:
    if old in src:
        src = src.replace(old, new)
        count += 1

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print(f"Done. Applied {count} replacements.")

# Check remaining
remaining = 0
checks = ["var(--cream)", "#E8DDD0", "#F7F0E6", "var(--terra)", "'DM Sans'", "'Syne'"]
for check in checks:
    c = src.count(check)
    if c > 0:
        print(f"  Still has {c}x: {check}")
        remaining += c
if remaining == 0:
    print("All old theme references cleaned up!")
