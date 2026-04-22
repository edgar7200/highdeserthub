with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# ── 1. Replace Google Fonts import ───────────────────────────────────────────
old = """const GOOGLE_FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display:ital@0;1&display=swap');
`;"""
new = """const GOOGLE_FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,700&family=Outfit:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
`;"""
assert src.count(old) == 1, f"fonts anchor not found"
src = src.replace(old, new)

# ── 2. Replace entire CSS block ───────────────────────────────────────────────
old = """const css = `
${GOOGLE_FONTS}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'DM Sans', sans-serif; background: #F7F0E6; color: #1A1208; min-height: 100vh; }
:root {
  --sand: #F7F0E6; --terra: #C4603A; --rust: #8B3A1A; --gold: #E8A030;
  --ink: #1A1208; --navy: #0D1B2A; --cream: #FDF8F2; --muted: #9A8E82;
}"""
new = """const css = `
${GOOGLE_FONTS}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Outfit', sans-serif; background: #080808; color: #F5F0E8; min-height: 100vh; }
:root {
  --sand: #F5F0E8; --terra: #C9A84C; --rust: #A07830; --gold: #C9A84C;
  --ink: #F5F0E8; --navy: #101010; --cream: #141414; --muted: #888880;
  --card-bg: #141414; --border: rgba(201,168,76,0.15); --border-hover: rgba(201,168,76,0.5);
}"""
assert src.count(old) == 1, f"css root anchor not found"
src = src.replace(old, new)

# ── 3. Replace nav CSS ────────────────────────────────────────────────────────
old = ".nav { background: var(--navy); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top: 0; z-index: 100; border-bottom: 3px solid var(--terra); }"
new = ".nav { background: #080808; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 64px; position: sticky; top: 0; z-index: 100; border-bottom: 1px solid rgba(201,168,76,0.2); backdrop-filter: blur(20px); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 4. Replace nav-logo CSS ───────────────────────────────────────────────────
old = ".nav-logo { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }"
new = ".nav-logo { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); letter-spacing: 0.02em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 5. Replace nav-links CSS ──────────────────────────────────────────────────
old = ".nav-links a { color: rgba(247,240,230,0.7); text-decoration: none; font-size: 0.875rem; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; transition: color 0.2s; }"
new = ".nav-links a { color: rgba(245,240,232,0.5); text-decoration: none; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; transition: color 0.2s; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 6. Replace nav-cta CSS ────────────────────────────────────────────────────
old = ".nav-cta { background: var(--terra); color: white !important; padding: 0.5rem 1.25rem; border-radius: 4px; font-weight: 600 !important; }"
new = ".nav-cta { background: var(--gold); color: #080808 !important; padding: 0.5rem 1.25rem; border-radius: 2px; font-weight: 700 !important; letter-spacing: 0.08em; font-size: 0.75rem !important; text-transform: uppercase; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 7. Replace hero CSS ───────────────────────────────────────────────────────
old = ".hero { background: var(--navy); padding: 5rem 2rem 2rem; position: relative; overflow: hidden; }"
new = ".hero { background: #080808; padding: 6rem 2rem 3rem; position: relative; overflow: hidden; border-bottom: 1px solid rgba(201,168,76,0.1); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 8. Replace hero::before ───────────────────────────────────────────────────
old = ".hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(196,96,58,0.15) 0%, transparent 70%); pointer-events: none; }"
new = ".hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 80% at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 50%); pointer-events: none; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 9. Replace hero-eyebrow CSS ───────────────────────────────────────────────
old = ".hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(196,96,58,0.2); border: 1px solid rgba(196,96,58,0.4); color: var(--gold); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: 2rem; margin-bottom: 1.5rem; }"
new = ".hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.3); color: var(--gold); font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.35rem 1rem; border-radius: 0; margin-bottom: 1.5rem; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 10. Replace hero-title CSS ────────────────────────────────────────────────
old = ".hero-title { font-family: 'Syne', sans-serif; font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800; color: var(--sand); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 1rem; }"
new = ".hero-title { font-family: 'Playfair Display', serif; font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 700; color: var(--sand); line-height: 1.05; letter-spacing: -0.01em; margin-bottom: 1rem; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 11. Replace hero-title em CSS ─────────────────────────────────────────────
old = ".hero-title em { font-style: normal; font-family: 'Syne', sans-serif; color: var(--terra); }"
new = ".hero-title em { font-style: italic; font-family: 'Playfair Display', serif; color: var(--gold); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 12. Replace hero-sub CSS ──────────────────────────────────────────────────
old = ".hero-sub { color: rgba(247,240,230,0.6); font-size: 1.1rem; max-width: 500px; line-height: 1.7; margin-bottom: 2.5rem; font-weight: 300; }"
new = ".hero-sub { color: rgba(245,240,232,0.45); font-size: 1rem; max-width: 480px; line-height: 1.8; margin-bottom: 2.5rem; font-weight: 300; letter-spacing: 0.01em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 13. Replace search-bar CSS ────────────────────────────────────────────────
old = ".search-bar { display: flex; flex-wrap: wrap; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 8px 40px rgba(0,0,0,0.3); max-width: 680px; }"
new = ".search-bar { display: flex; flex-wrap: wrap; background: #1A1A1A; border: 1px solid rgba(201,168,76,0.2); border-radius: 2px; overflow: hidden; box-shadow: 0 8px 60px rgba(0,0,0,0.6); max-width: 680px; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 14. Replace search-bar input CSS ─────────────────────────────────────────
old = ".search-bar input { flex: 1; border: none; padding: 1.1rem 1.5rem; font-size: 1rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: transparent; outline: none; min-width: 0; }"
new = ".search-bar input { flex: 1; border: none; padding: 1.1rem 1.5rem; font-size: 0.95rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: transparent; outline: none; min-width: 0; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 15. Replace search-bar input placeholder CSS ──────────────────────────────
old = ".search-bar input::placeholder { color: var(--muted); }"
new = ".search-bar input::placeholder { color: rgba(245,240,232,0.25); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 16. Replace search-bar select CSS ────────────────────────────────────────
old = ".search-bar select { border: none; padding: 1rem 1.25rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: transparent; outline: none; cursor: pointer; min-width: 140px; }"
new = ".search-bar select { border: none; padding: 1rem 1.25rem; font-size: 0.85rem; font-family: 'Outfit', sans-serif; color: rgba(245,240,232,0.6); background: transparent; outline: none; cursor: pointer; min-width: 140px; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 17. Replace search-btn CSS ───────────────────────────────────────────────
old = ".search-btn { background: var(--terra); color: white; border: none; padding: 1rem 2rem; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background 0.2s; flex: 1; min-width: 100%; }"
new = ".search-btn { background: var(--gold); color: #080808; border: none; padding: 1rem 2rem; font-size: 0.8rem; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; transition: background 0.2s; flex: 1; min-width: 100%; letter-spacing: 0.1em; text-transform: uppercase; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 18. Replace stat-num CSS ─────────────────────────────────────────────────
old = ".stat-num { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--gold); }"
new = ".stat-num { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 700; color: var(--gold); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 19. Replace section-title CSS ────────────────────────────────────────────
old = ".section-title { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--ink); letter-spacing: -0.02em; }"
new = ".section-title { font-family: 'Playfair Display', serif; font-size: 1.8rem; font-weight: 700; color: var(--sand); letter-spacing: -0.01em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 20. Replace cat-card CSS ─────────────────────────────────────────────────
old = ".cat-card { background: var(--cream); border: 1.5px solid #E8DDD0; border-radius: 10px; padding: 0.5rem 0.75rem; display: flex; flex-direction: row; align-items: center; gap: 0.4rem; cursor: pointer; transition: all 0.2s; text-align: left; }"
new = ".cat-card { background: #141414; border: 1px solid rgba(201,168,76,0.12); border-radius: 2px; padding: 0.5rem 0.75rem; display: flex; flex-direction: row; align-items: center; gap: 0.4rem; cursor: pointer; transition: all 0.2s; text-align: left; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 21. Replace cat-card hover CSS ───────────────────────────────────────────
old = ".cat-card:hover { border-color: var(--terra); box-shadow: 0 4px 20px rgba(196,96,58,0.12); transform: translateY(-2px); }"
new = ".cat-card:hover { border-color: rgba(201,168,76,0.4); box-shadow: 0 4px 20px rgba(201,168,76,0.08); transform: translateY(-2px); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 22. Replace cat-card active CSS ──────────────────────────────────────────
old = ".cat-card.active { background: var(--navy); border-color: var(--navy); }"
new = ".cat-card.active { background: rgba(201,168,76,0.1); border-color: rgba(201,168,76,0.5); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 23. Replace cat-label CSS ────────────────────────────────────────────────
old = ".cat-label { font-size: 0.83rem; font-weight: 600; color: var(--ink); line-height: 1.2; }"
new = ".cat-label { font-size: 0.8rem; font-weight: 500; color: rgba(245,240,232,0.7); line-height: 1.2; letter-spacing: 0.02em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 24. Replace cat-card active label CSS ────────────────────────────────────
old = ".cat-card.active .cat-label { color: var(--sand); }"
new = ".cat-card.active .cat-label { color: var(--gold); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 25. Replace biz-card CSS ─────────────────────────────────────────────────
old = ".biz-card { background: var(--cream); border: 1.5px solid #E8DDD0; border-radius: 12px; overflow: hidden; cursor: pointer; transition: all 0.2s; position: relative; }"
new = ".biz-card { background: #141414; border: 1px solid rgba(201,168,76,0.1); border-radius: 2px; overflow: hidden; cursor: pointer; transition: all 0.3s; position: relative; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 26. Replace biz-card hover CSS ───────────────────────────────────────────
old = ".biz-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.1); transform: translateY(-3px); border-color: transparent; }"
new = ".biz-card:hover { box-shadow: 0 8px 40px rgba(201,168,76,0.08); transform: translateY(-3px); border-color: rgba(201,168,76,0.35); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 27. Replace biz-name CSS ─────────────────────────────────────────────────
old = ".biz-name { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--ink); line-height: 1.2; margin-bottom: 0.25rem; }"
new = ".biz-name { font-family: 'Playfair Display', serif; font-size: 0.95rem; font-weight: 600; color: var(--sand); line-height: 1.2; margin-bottom: 0.25rem; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 28. Replace biz-desc CSS ─────────────────────────────────────────────────
old = ".biz-desc { padding: 0 1.25rem 0.85rem; font-size: 0.82rem; color: #5C5248; line-height: 1.6; }"
new = ".biz-desc { padding: 0 1.25rem 0.85rem; font-size: 0.82rem; color: rgba(245,240,232,0.45); line-height: 1.6; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 29. Replace service-tag CSS ──────────────────────────────────────────────
old = ".service-tag { background: #EDE5D8; color: #6B5A48; font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.55rem; border-radius: 3px; }"
new = ".service-tag { background: rgba(201,168,76,0.08); color: rgba(201,168,76,0.7); font-size: 0.68rem; font-weight: 500; padding: 0.2rem 0.55rem; border-radius: 1px; letter-spacing: 0.04em; border: 1px solid rgba(201,168,76,0.15); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 30. Replace biz-footer CSS ───────────────────────────────────────────────
old = ".biz-footer { border-top: 1px solid #EDE5D8; padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }"
new = ".biz-footer { border-top: 1px solid rgba(201,168,76,0.1); padding: 0.85rem 1.25rem; display: flex; align-items: center; justify-content: space-between; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 31. Replace biz-phone CSS ────────────────────────────────────────────────
old = ".biz-phone { font-size: 0.82rem; font-weight: 600; color: var(--terra); text-decoration: none; }"
new = ".biz-phone { font-size: 0.82rem; font-weight: 600; color: var(--gold); text-decoration: none; letter-spacing: 0.02em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 32. Replace modal CSS ─────────────────────────────────────────────────────
old = ".modal { background: var(--cream); border-radius: 16px; max-width: 560px; width: 100%; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.3); max-height: 90vh; overflow-y: auto; }"
new = ".modal { background: #141414; border: 1px solid rgba(201,168,76,0.2); border-radius: 2px; max-width: 560px; width: 100%; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.8); max-height: 90vh; overflow-y: auto; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 33. Replace modal-header CSS ─────────────────────────────────────────────
old = ".modal-header { padding: 2rem; display: flex; gap: 1rem; align-items: center; border-bottom: 1.5px solid #E8DDD0; }"
new = ".modal-header { padding: 2rem; display: flex; gap: 1rem; align-items: center; border-bottom: 1px solid rgba(201,168,76,0.12); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 34. Replace modal-name CSS ───────────────────────────────────────────────
old = ".modal-name { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); margin-bottom: 0.2rem; }"
new = ".modal-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: var(--sand); margin-bottom: 0.2rem; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 35. Replace modal-row-label CSS ──────────────────────────────────────────
old = ".modal-row-label { font-weight: 600; color: var(--ink); min-width: 80px; flex-shrink: 0; }"
new = ".modal-row-label { font-weight: 600; color: rgba(245,240,232,0.4); min-width: 80px; flex-shrink: 0; font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 36. Replace modal-row-val CSS ────────────────────────────────────────────
old = ".modal-row-val { color: #5C5248; line-height: 1.5; }"
new = ".modal-row-val { color: rgba(245,240,232,0.75); line-height: 1.5; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 37. Replace modal-footer CSS ─────────────────────────────────────────────
old = ".modal-footer { padding: 1.25rem 2rem; border-top: 1.5px solid #E8DDD0; display: flex; gap: 0.75rem; flex-wrap: wrap; }"
new = ".modal-footer { padding: 1.25rem 2rem; border-top: 1px solid rgba(201,168,76,0.12); display: flex; gap: 0.75rem; flex-wrap: wrap; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 38. Replace btn-primary CSS ──────────────────────────────────────────────
old = ".btn-primary { flex: 1; background: var(--terra); color: white; border: none; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background 0.2s; min-width: 110px; }"
new = ".btn-primary { flex: 1; background: var(--gold); color: #080808; border: none; padding: 0.85rem; border-radius: 2px; font-size: 0.8rem; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; transition: all 0.2s; min-width: 110px; letter-spacing: 0.08em; text-transform: uppercase; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 39. Replace btn-primary hover CSS ────────────────────────────────────────
old = ".btn-primary:hover { background: var(--rust); }"
new = ".btn-primary:hover { background: #A07830; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 40. Replace btn-secondary CSS ────────────────────────────────────────────
old = ".btn-secondary { flex: 1; background: transparent; color: var(--ink); border: 1.5px solid #E8DDD0; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; min-width: 110px; }"
new = ".btn-secondary { flex: 1; background: transparent; color: rgba(245,240,232,0.6); border: 1px solid rgba(201,168,76,0.2); padding: 0.85rem; border-radius: 2px; font-size: 0.8rem; font-weight: 500; font-family: 'Outfit', sans-serif; cursor: pointer; min-width: 110px; letter-spacing: 0.04em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 41. Replace btn-secondary hover CSS ──────────────────────────────────────
old = ".btn-secondary:hover { border-color: var(--ink); }"
new = ".btn-secondary:hover { border-color: rgba(201,168,76,0.5); color: var(--sand); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 42. Replace btn-card CSS ─────────────────────────────────────────────────
old = ".btn-card { flex: 1; background: var(--navy); color: var(--sand); border: none; padding: 0.85rem; border-radius: 8px; font-size: 0.9rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: background 0.2s; min-width: 110px; }"
new = ".btn-card { flex: 1; background: rgba(201,168,76,0.08); color: var(--gold); border: 1px solid rgba(201,168,76,0.25); padding: 0.85rem; border-radius: 2px; font-size: 0.8rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: all 0.2s; min-width: 110px; letter-spacing: 0.04em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 43. Replace btn-card hover CSS ───────────────────────────────────────────
old = ".btn-card:hover { background: #1a3050; }"
new = ".btn-card:hover { background: rgba(201,168,76,0.15); border-color: rgba(201,168,76,0.5); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 44. Replace pill CSS ─────────────────────────────────────────────────────
old = ".pill { background: var(--cream); border: 1.5px solid #E8DDD0; color: var(--ink); padding: 0.4rem 1rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 500; cursor: pointer; transition: all 0.15s; font-family: 'DM Sans', sans-serif; }"
new = ".pill { background: transparent; border: 1px solid rgba(201,168,76,0.15); color: rgba(245,240,232,0.5); padding: 0.4rem 1rem; border-radius: 1px; font-size: 0.75rem; font-weight: 500; cursor: pointer; transition: all 0.15s; font-family: 'Outfit', sans-serif; letter-spacing: 0.04em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 45. Replace pill hover CSS ───────────────────────────────────────────────
old = ".pill:hover { border-color: var(--terra); color: var(--terra); }"
new = ".pill:hover { border-color: rgba(201,168,76,0.4); color: var(--gold); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 46. Replace pill active CSS ──────────────────────────────────────────────
old = ".pill.active { background: var(--terra); border-color: var(--terra); color: white; }"
new = ".pill.active { background: rgba(201,168,76,0.12); border-color: var(--gold); color: var(--gold); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 47. Replace verified-badge CSS ───────────────────────────────────────────
old = ".verified-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(107,143,113,0.15); border: 1px solid rgba(107,143,113,0.4); color: #4A7A52; font-size: 0.68rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2rem; letter-spacing: 0.04em; text-transform: uppercase; }"
new = ".verified-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.25); color: var(--gold); font-size: 0.65rem; font-weight: 600; padding: 0.2rem 0.55rem; border-radius: 1px; letter-spacing: 0.06em; text-transform: uppercase; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 48. Replace carousel-section CSS ─────────────────────────────────────────
old = ".carousel-section { background: var(--navy); padding: 1.5rem 2rem 3rem; position: relative; overflow: hidden; display: block; width: 100%; clear: both; box-sizing: border-box; }"
new = ".carousel-section { background: #0C0C0C; padding: 1.5rem 2rem 3rem; position: relative; overflow: hidden; display: block; width: 100%; clear: both; box-sizing: border-box; border-top: 1px solid rgba(201,168,76,0.08); border-bottom: 1px solid rgba(201,168,76,0.08); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 49. Replace carousel-title CSS ───────────────────────────────────────────
old = ".carousel-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }"
new = ".carousel-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); letter-spacing: 0; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 50. Replace carousel-card CSS ────────────────────────────────────────────
old = ".carousel-card { background: rgba(255,255,255,0.18); border: 1.5px solid rgba(247,240,230,0.5); border-radius: 14px; padding: 1.75rem; flex: 1; min-width: 280px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }"
new = ".carousel-card { background: #1A1A1A; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; padding: 1.75rem; flex: 1; min-width: 280px; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 51. Replace carousel-card hover CSS ──────────────────────────────────────
old = ".carousel-card:hover { border-color: rgba(232,160,48,0.4); background: rgba(255,255,255,0.08); transform: translateY(-3px); }"
new = ".carousel-card:hover { border-color: rgba(201,168,76,0.4); background: #1E1E1E; transform: translateY(-3px); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 52. Replace carousel-biz-name CSS ────────────────────────────────────────
old = ".carousel-biz-name { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 800; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }"
new = ".carousel-biz-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 600; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 53. Replace cta-banner CSS ───────────────────────────────────────────────
old = ".cta-banner { background: var(--navy); padding: 4rem 2rem; text-align: center; position: relative; overflow: hidden; }"
new = ".cta-banner { background: #0C0C0C; padding: 5rem 2rem; text-align: center; position: relative; overflow: hidden; border-top: 1px solid rgba(201,168,76,0.08); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 54. Replace cta-title CSS ────────────────────────────────────────────────
old = ".cta-title { font-family: 'Syne', sans-serif; font-size: 2.2rem; font-weight: 800; color: var(--sand); margin-bottom: 0.75rem; letter-spacing: -0.02em; }"
new = ".cta-title { font-family: 'Playfair Display', serif; font-size: 2.4rem; font-weight: 700; color: var(--sand); margin-bottom: 0.75rem; letter-spacing: -0.01em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 55. Replace cta-btn-main CSS ─────────────────────────────────────────────
old = ".cta-btn-main { background: var(--terra); color: white; border: none; padding: 0.9rem 2rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; }"
new = ".cta-btn-main { background: var(--gold); color: #080808; border: none; padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.8rem; font-weight: 700; font-family: 'Outfit', sans-serif; cursor: pointer; letter-spacing: 0.1em; text-transform: uppercase; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 56. Replace cta-btn-ghost CSS ────────────────────────────────────────────
old = ".cta-btn-ghost { background: transparent; color: var(--sand); border: 1.5px solid rgba(247,240,230,0.3); padding: 0.9rem 2rem; border-radius: 6px; font-size: 0.95rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; }"
new = ".cta-btn-ghost { background: transparent; color: rgba(245,240,232,0.6); border: 1px solid rgba(201,168,76,0.2); padding: 0.9rem 2rem; border-radius: 2px; font-size: 0.8rem; font-weight: 500; font-family: 'Outfit', sans-serif; cursor: pointer; letter-spacing: 0.06em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 57. Replace cta-btn-ghost hover CSS ──────────────────────────────────────
old = ".cta-btn-ghost:hover { border-color: var(--sand); }"
new = ".cta-btn-ghost:hover { border-color: rgba(201,168,76,0.5); color: var(--gold); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 58. Replace footer CSS ───────────────────────────────────────────────────
old = ".footer { background: #0A1520; padding: 2rem; text-align: center; }"
new = ".footer { background: #050505; padding: 2rem; text-align: center; border-top: 1px solid rgba(201,168,76,0.08); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 59. Replace footer-logo CSS ──────────────────────────────────────────────
old = ".footer-logo { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; }"
new = ".footer-logo { font-family: 'Playfair Display', serif; font-size: 1.2rem; font-weight: 700; color: var(--sand); margin-bottom: 0.5rem; letter-spacing: 0.02em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 60. Replace biz-owner-strip CSS ──────────────────────────────────────────
old = ".biz-owner-strip { background: var(--terra); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }"
new = ".biz-owner-strip { background: rgba(201,168,76,0.06); border-top: 1px solid rgba(201,168,76,0.12); border-bottom: 1px solid rgba(201,168,76,0.12); padding: 0.85rem 2rem; display: flex; align-items: center; justify-content: center; gap: 1.5rem; flex-wrap: wrap; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 61. Replace biz-owner-strip-btn CSS ──────────────────────────────────────
old = ".biz-owner-strip-btn { background: white; color: var(--terra); border: none; padding: 0.45rem 1.25rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 700; font-family: \"DM Sans\", sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; }"
new = ".biz-owner-strip-btn { background: transparent; color: var(--gold); border: 1px solid rgba(201,168,76,0.3); padding: 0.45rem 1.25rem; border-radius: 1px; font-size: 0.75rem; font-weight: 600; font-family: 'Outfit', sans-serif; cursor: pointer; transition: all 0.2s; white-space: nowrap; letter-spacing: 0.06em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 62. Replace announcement-banner CSS ──────────────────────────────────────
old = ".announcement-banner { background: var(--navy); border-bottom: 2px solid var(--gold); padding: 0.6rem 2rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-align: center; }"
new = ".announcement-banner { background: rgba(201,168,76,0.06); border-bottom: 1px solid rgba(201,168,76,0.2); padding: 0.6rem 2rem; display: flex; align-items: center; justify-content: center; gap: 0.75rem; text-align: center; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 63. Replace form-modal CSS ───────────────────────────────────────────────
old = ".form-modal { background: var(--cream); border-radius: 16px; max-width: 600px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }"
new = ".form-modal { background: #141414; border: 1px solid rgba(201,168,76,0.15); border-radius: 2px; max-width: 600px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.8); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 64. Replace form-modal-title CSS ─────────────────────────────────────────
old = ".form-modal-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.25rem; }"
new = ".form-modal-title { font-family: 'Playfair Display', serif; font-size: 1.4rem; font-weight: 700; color: var(--sand); margin-bottom: 0.25rem; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 65. Replace form-input CSS ───────────────────────────────────────────────
old = ".form-input { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; transition: border-color 0.2s; width: 100%; }"
new = ".form-input { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; transition: border-color 0.2s; width: 100%; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 66. Replace form-input focus CSS ─────────────────────────────────────────
old = ".form-input:focus { border-color: var(--terra); }"
new = ".form-input:focus { border-color: rgba(201,168,76,0.5); }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 67. Replace form-select CSS ──────────────────────────────────────────────
old = ".form-select { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; width: 100%; cursor: pointer; }"
new = ".form-select { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; width: 100%; cursor: pointer; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 68. Replace form-textarea CSS ────────────────────────────────────────────
old = ".form-textarea { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; resize: vertical; min-height: 80px; width: 100%; }"
new = ".form-textarea { border: 1px solid rgba(201,168,76,0.15); border-radius: 1px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'Outfit', sans-serif; color: var(--sand); background: #1A1A1A; outline: none; resize: vertical; min-height: 80px; width: 100%; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 69. Replace divider CSS ──────────────────────────────────────────────────
old = ".divider { border: none; border-top: 1.5px solid #E8DDD0; margin: 0 2rem; }"
new = ".divider { border: none; border-top: 1px solid rgba(201,168,76,0.08); margin: 0 2rem; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 70. Replace listings-count CSS ───────────────────────────────────────────
old = ".listings-count { font-size: 0.875rem; color: var(--muted); font-weight: 500; }"
new = ".listings-count { font-size: 0.8rem; color: rgba(245,240,232,0.35); font-weight: 400; letter-spacing: 0.04em; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 71. Replace nav-btn-gold and nav-btn-terra CSS ───────────────────────────
old = """.nav-btn-gold { background: var(--gold) !important; color: var(--navy) !important; padding: 0.4rem 1rem !important; border-radius: 4px !important; font-weight: 700 !important; }
.nav-btn-gold:hover { background: #d4911f !important; color: var(--navy) !important; }
.nav-btn-terra { background: var(--terra) !important; color: white !important; padding: 0.4rem 1rem !important; border-radius: 4px !important; font-weight: 700 !important; }
.nav-btn-terra:hover { background: var(--rust) !important; color: white !important; }"""
new = """.nav-btn-gold { background: rgba(201,168,76,0.1) !important; color: var(--gold) !important; padding: 0.4rem 1rem !important; border-radius: 1px !important; font-weight: 600 !important; border: 1px solid rgba(201,168,76,0.25) !important; font-size: 0.75rem !important; letter-spacing: 0.08em !important; }
.nav-btn-gold:hover { background: rgba(201,168,76,0.18) !important; color: var(--gold) !important; border-color: rgba(201,168,76,0.5) !important; }
.nav-btn-terra { background: transparent !important; color: rgba(245,240,232,0.5) !important; padding: 0.4rem 1rem !important; border-radius: 1px !important; font-weight: 500 !important; border: 1px solid rgba(245,240,232,0.1) !important; font-size: 0.75rem !important; letter-spacing: 0.08em !important; }
.nav-btn-terra:hover { border-color: rgba(245,240,232,0.25) !important; color: var(--sand) !important; }"""
assert src.count(old) == 1
src = src.replace(old, new)

# ── 72. Replace section background ───────────────────────────────────────────
old = ".section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; clear: both; }"
new = ".section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; clear: both; background: transparent; }"
assert src.count(old) == 1
src = src.replace(old, new)

# ── 73. Replace listings-section background ───────────────────────────────────
old = ".listings-section { padding: 3rem 2rem 5rem; max-width: 1100px; margin: 0 auto; }"
new = ".listings-section { padding: 3rem 2rem 5rem; max-width: 1100px; margin: 0 auto; background: transparent; }"
assert src.count(old) == 1
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("All patches applied successfully.")
