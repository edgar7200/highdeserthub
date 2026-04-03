with open('src/App.jsx', 'r') as f:
    content = f.read()

# ── 1. ADD carousel: true TO SELECTED BUSINESSES ─────────────
content = content.replace(
    '    name: "Miss Cleandipity",\n    baseThumbsUp: 9,',
    '    name: "Miss Cleandipity",\n    carousel: true,\n    baseThumbsUp: 9,'
)
content = content.replace(
    '    name: "Alvarez Appliances",\n    baseThumbsUp: 4,',
    '    name: "Alvarez Appliances",\n    carousel: true,\n    baseThumbsUp: 4,'
)

# ── 2. ADD CAROUSEL STATE ─────────────────────────────────────
old_state = "  const [thumbsUp, setThumbsUp] = useState({});"
new_state = """  const [thumbsUp, setThumbsUp] = useState({});
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselItems = BUSINESSES.filter(b => b.carousel);

  useEffect(() => {
    if (carouselItems.length <= 1) return;
    const timer = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);"""

content = content.replace(old_state, new_state)

# ── 3. ADD CAROUSEL CSS ───────────────────────────────────────
old_css = ".verified-badge {"
new_css = """.carousel-section { background: var(--navy); padding: 3rem 2rem; position: relative; overflow: hidden; }
.carousel-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 60% 100% at 50% 50%, rgba(196,96,58,0.1) 0%, transparent 70%); pointer-events: none; }
.carousel-inner { max-width: 1100px; margin: 0 auto; position: relative; z-index: 1; }
.carousel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.75rem; }
.carousel-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--sand); letter-spacing: -0.02em; }
.carousel-title span { color: var(--gold); }
.carousel-dots { display: flex; gap: 0.5rem; align-items: center; }
.carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(247,240,230,0.2); border: none; cursor: pointer; transition: all 0.2s; padding: 0; }
.carousel-dot.active { background: var(--gold); width: 24px; border-radius: 4px; }
.carousel-track { display: flex; gap: 1.25rem; transition: none; }
.carousel-card { background: rgba(255,255,255,0.05); border: 1.5px solid rgba(247,240,230,0.1); border-radius: 14px; padding: 1.75rem; flex: 1; min-width: 0; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
.carousel-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(196,96,58,0.08) 0%, transparent 60%); pointer-events: none; }
.carousel-card:hover { border-color: rgba(232,160,48,0.4); background: rgba(255,255,255,0.08); transform: translateY(-3px); }
.carousel-card-top { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1rem; position: relative; z-index: 1; }
.carousel-avatar { width: 56px; height: 56px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: white; flex-shrink: 0; }
.carousel-biz-name { font-family: 'Syne', sans-serif; font-size: 1.05rem; font-weight: 800; color: var(--sand); margin-bottom: 0.25rem; line-height: 1.2; }
.carousel-biz-meta { font-size: 0.78rem; color: rgba(247,240,230,0.5); margin-bottom: 0.25rem; }
.carousel-spotlight-badge { display: inline-flex; align-items: center; gap: 0.3rem; background: rgba(232,160,48,0.2); border: 1px solid rgba(232,160,48,0.4); color: var(--gold); font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 2rem; letter-spacing: 0.06em; text-transform: uppercase; }
.carousel-desc { font-size: 0.85rem; color: rgba(247,240,230,0.65); line-height: 1.6; margin-bottom: 1.25rem; position: relative; z-index: 1; }
.carousel-footer { display: flex; align-items: center; justify-content: space-between; position: relative; z-index: 1; }
.carousel-phone { font-size: 0.875rem; font-weight: 600; color: var(--gold); text-decoration: none; }
.carousel-phone:hover { text-decoration: underline; }
.carousel-view-btn { background: rgba(196,96,58,0.3); color: var(--sand); border: 1px solid rgba(196,96,58,0.4); padding: 0.4rem 1rem; border-radius: 6px; font-size: 0.78rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all 0.2s; }
.carousel-view-btn:hover { background: var(--terra); border-color: var(--terra); }
.carousel-nav { display: flex; gap: 0.5rem; }
.carousel-nav-btn { width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); border: 1.5px solid rgba(247,240,230,0.15); color: var(--sand); font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.carousel-nav-btn:hover { background: rgba(255,255,255,0.15); border-color: rgba(247,240,230,0.3); }
.carousel-single { max-width: 500px; }

.verified-badge {"""

content = content.replace(old_css, new_css)

# ── 4. ADD CAROUSEL SECTION BETWEEN HERO AND CATEGORIES ──────
old_section = "      {/* CATEGORIES */}\n      <section className=\"section\">"
new_section = """      {/* FEATURED CAROUSEL */}
      {carouselItems.length > 0 && (
        <section className="carousel-section">
          <div className="carousel-inner">
            <div className="carousel-header">
              <div className="carousel-title">⭐ <span>Spotlight</span> Businesses</div>
              <div style={{display:'flex', alignItems:'center', gap:'1rem'}}>
                {carouselItems.length > 1 && (
                  <div className="carousel-dots">
                    {carouselItems.map((_, i) => (
                      <button
                        key={i}
                        className={`carousel-dot ${i === carouselIndex ? 'active' : ''}`}
                        onClick={() => setCarouselIndex(i)}
                      />
                    ))}
                  </div>
                )}
                {carouselItems.length > 1 && (
                  <div className="carousel-nav">
                    <button className="carousel-nav-btn" onClick={() => setCarouselIndex(prev => (prev - 1 + carouselItems.length) % carouselItems.length)}>‹</button>
                    <button className="carousel-nav-btn" onClick={() => setCarouselIndex(prev => (prev + 1) % carouselItems.length)}>›</button>
                  </div>
                )}
              </div>
            </div>
            <div className={`carousel-track ${carouselItems.length === 1 ? 'carousel-single' : ''}`}>
              {carouselItems.map((biz, i) => (
                <div
                  key={biz.id}
                  className="carousel-card"
                  style={{
                    opacity: carouselItems.length === 1 ? 1 : (i === carouselIndex ? 1 : 0.4),
                    transform: carouselItems.length === 1 ? 'none' : (i === carouselIndex ? 'scale(1.02)' : 'scale(0.98)'),
                    transition: 'all 0.4s ease',
                  }}
                  onClick={() => { setSelectedBiz(biz); logView(biz); }}
                >
                  <div className="carousel-card-top">
                    <div className="carousel-avatar" style={{background: biz.color}}>{biz.initials}</div>
                    <div>
                      <div className="carousel-biz-name">{biz.name}</div>
                      <div className="carousel-biz-meta">📍 {biz.city} · {CATEGORIES.find(c => c.id === biz.category)?.label}</div>
                      <div className="carousel-spotlight-badge">✦ Spotlight</div>
                    </div>
                  </div>
                  <div className="carousel-desc">{biz.description}</div>
                  <div className="carousel-footer">
                    <a className="carousel-phone" href={`tel:${biz.phone}`} onClick={e => e.stopPropagation()}>{biz.phone}</a>
                    <button className="carousel-view-btn">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CATEGORIES */}
      <section className="section">"""

content = content.replace(old_section, new_section)

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done! Carousel added.')
print('Miss Cleandipity and Alvarez Appliances are in the spotlight.')
