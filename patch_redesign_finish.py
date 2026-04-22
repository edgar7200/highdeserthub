with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

patches = [
    # carousel-card hover
    (
        ".carousel-card:hover { border-color: rgba(232,160,48,0.4); background: rgba(255,255,255,0.08); transform: translateY(-3px); }",
        ".carousel-card:hover { border-color: rgba(201,168,76,0.4); background: #1E1E1E; transform: translateY(-3px); }"
    ),
    # cta-banner
    (
        ".cta-banner { background: var(--navy); padding: 4rem 2rem; text-align: center; position: relative; overflow: hidden; }",
        ".cta-banner { background: #0C0C0C; padding: 5rem 2rem; text-align: center; position: relative; overflow: hidden; border-top: 1px solid rgba(201,168,76,0.08); }"
    ),
    # cta-title
    (
        ".cta-title { font-family: 'Syne', sans-serif; font-size: 2.2rem; font-weight: 800; color: var(--sand); margin-bottom: 0.75rem; letter-spacing: -0.02em; }",
        ".cta-title { font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 700; color: var(--sand); margin-bottom: 0.75rem; letter-spacing: -0.01em; }"
    ),
    # cta-btn-main
    (
        ".cta-btn-main { background: var(--terra); color: white; border: none; padding: 0.9rem 2rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; }",
        ".cta-btn-main { background: var(--gold); color: #080808; border: none; padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.8rem; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; letter-spacing: 0.1em; text-transform: uppercase; }"
    ),
    # cta-btn-ghost
    (
        ".cta-btn-ghost { background: transparent; color: var(--sand); border: 1.5px solid rgba(247,240,230,0.3); padding: 0.9rem 2rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; }",
        ".cta-btn-ghost { background: transparent; color: rgba(245,240,232,0.6); border: 1px solid rgba(201,168,76,0.2); padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.8rem; font-weight: 500; font-family: 'Outfit', sans-serif; cursor: pointer; letter-spacing: 0.06em; }"
    ),
    # cta-btn-ghost hover
    (
        ".cta-btn-ghost:hover { border-color: var(--sand); }",
        ".cta-btn-ghost:hover { border-color: rgba(201,168,76,0.5); color: var(--gold); }"
    ),
    # footer
    (
        ".footer { background: #0A1520; padding: 2rem; text-align: center; }",
        ".footer { background: #050505; padding: 2rem; text-align: center; border-top: 1px solid rgba(201,168,76,0.08); }"
    ),
    # footer-logo
    (
        ".footer-logo { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }",
        ".footer-logo { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--sand); margin-bottom: 0.5rem; letter-spacing: 0.02em; }"
    ),
    # biz-owner-strip
    (
        ".biz-owner-strip { background: var(--terra); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }",
        ".biz-owner-strip { background: rgba(201,168,76,0.06); border-top: 1px solid rgba(201,168,76,0.12); border-bottom: 1px solid rgba(201,168,76,0.12); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }"
    ),
    # biz-owner-strip-btn
    (
        '.biz-owner-strip-btn { background: white; color: var(--terra); border: none; padding: 0.45rem 1.25rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 700; font-family: "DM Sans", sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; }',
        ".biz-owner-strip-btn { background: transparent; color: var(--gold); border: 1px solid rgba(201,168,76,0.3); padding: 0.45rem 1.25rem; border-radius: 1px; font-size: 0.75rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; letter-spacing: 0.06em; }"
    ),
    # announcement-banner
    (
        ".announcement-banner { background: var(--navy); border-bottom: 2px solid var(--gold); padding: 0.6rem 2rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-align: center; }",
        ".announcement-banner { background: rgba(201,168,76,0.06); border-bottom: 1px solid rgba(201,168,76,0.2); padding: 0.6rem 2rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-align: center; }"
    ),
    # form-modal
    (
        ".form-modal { background: var(--cream); border-radius: 16px; max-width: 600px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }",
        ".form-modal { background: #141414; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; max-width: 600px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.8); }"
    ),
    # form-modal-title
    (
        ".form-modal-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.25rem; }",
        ".form-modal-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); margin-bottom: 0.25rem; }"
    ),
    # form-input
    (
        ".form-input { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; transition: border-color 0.2s; width: 100%; }",
        ".form-input { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; transition: border-color 0.2s; width: 100%; }"
    ),
    # form-input focus
    (
        ".form-input:focus { border-color: var(--terra); }",
        ".form-input:focus { border-color: rgba(201,168,76,0.5); }"
    ),
    # form-select
    (
        ".form-select { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; width: 100%; cursor: pointer; }",
        ".form-select { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; width: 100%; cursor: pointer; }"
    ),
    # form-textarea
    (
        ".form-textarea { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; resize: vertical; min-height: 80px; width: 100%; }",
        ".form-textarea { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; resize: vertical; min-height: 80px; width: 100%; }"
    ),
    # divider
    (
        ".divider { border: none; border-top: 1.5px solid #E8DDD0; margin: 0 2rem; }",
        ".divider { border: none; border-top: 1px solid rgba(201,168,76,0.08); margin: 0 2rem; }"
    ),
    # listings-count
    (
        ".listings-count { font-size: 0.875rem; color: var(--muted); font-weight: 500; }",
        ".listings-count { font-size: 0.8rem; color: rgba(245,240,232,0.35); font-weight: 400; letter-spacing: 0.04em; }"
    ),
    # nav-btn-gold and terra
    (
        ".nav-btn-gold { background: var(--gold) !important; color: var(--navy) !important; padding: 0.4rem 1rem !important; border-radius: 4px !important; font-weight: 700 !important; }\n.nav-btn-gold:hover { background: #d4911f !important; color: var(--navy) !important; }\n.nav-btn-terra { background: var(--terra) !important; color: white !important; padding: 0.4rem 1rem !important; border-radius: 4px !important; font-weight: 700 !important; }\n.nav-btn-terra:hover { background: var(--rust) !important; color: white !important; }",
        ".nav-btn-gold { background: rgba(201,168,76,0.1) !important; color: var(--gold) !important; padding: 0.4rem 1rem !important; border-radius: 1px !important; font-weight: 600 !important; border: 1px solid rgba(201,168,76,0.25) !important; font-size: 0.75rem !important; letter-spacing: 0.08em !important; }\n.nav-btn-gold:hover { background: rgba(201,168,76,0.18) !important; color: var(--gold) !important; border-color: rgba(201,168,76,0.5) !important; }\n.nav-btn-terra { background: transparent !important; color: rgba(245,240,232,0.5) !important; padding: 0.4rem 1rem !important; border-radius: 1px !important; font-weight: 500 !important; border: 1px solid rgba(245,240,232,0.1) !important; font-size: 0.75rem !important; letter-spacing: 0.08em !important; }\n.nav-btn-terra:hover { border-color: rgba(245,240,232,0.25) !important; color: var(--sand) !important; }"
    ),
    # section background
    (
        ".section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; clear: both; }",
        ".section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; clear: both; background: transparent; }"
    ),
    # listings-section background
    (
        ".listings-section { padding: 3rem 2rem 5rem; max-width: 1100px; margin: 0 auto; }",
        ".listings-section { padding: 3rem 2rem 5rem; max-width: 1100px; margin: 0 auto; background: transparent; }"
    ),
]

count = 0
skipped = 0
for old, new in patches:
    if old in src:
        src = src.replace(old, new)
        count += 1
    else:
        print(f"SKIPPED (already applied or not found): {old[:60]}...")
        skipped += 1

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print(f"\nDone. Applied {count} patches, skipped {skipped}.")
