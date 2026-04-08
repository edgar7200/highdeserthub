with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    lines = f.readlines()

# Fix line 1634 (duplicate carousel-track) and line 1606 (first one) — replace both with new CSS
# Also fix carousel-card on lines around 1607 and 1635
new_track_css = '.carousel-track-outer { overflow: hidden; width: 100%; }\n.carousel-track { display: flex; transition: transform 0.4s cubic-bezier(0.4,0,0.2,1); will-change: transform; }\n'
new_card_css = '.carousel-card { background: #1a2e42; border: 1.5px solid rgba(247,240,230,0.15); border-radius: 14px; padding: 1.75rem; flex: 0 0 100%; width: 100%; cursor: pointer; transition: border-color 0.3s; position: relative; overflow: hidden; box-sizing: border-box; }\n'
new_card_before = ".carousel-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(196,96,58,0.06) 0%, transparent 60%); pointer-events: none; }\n"
new_card_hover = '.carousel-card:hover { border-color: rgba(232,160,48,0.4); }\n'

replaced_track = 0
replaced_card = 0
result = []
i = 0
while i < len(lines):
    line = lines[i]
    # Replace first carousel-track, skip second
    if '.carousel-track { display: flex; gap: 1.25rem; transition: none; flex-wrap: wrap; }' in line:
        if replaced_track == 0:
            result.append(new_track_css)
            replaced_track += 1
        else:
            pass  # skip duplicate
        i += 1
        continue
    # Replace first carousel-card block (3 lines), skip second
    if '.carousel-card { background: rgba(255,255,255,0.18)' in line:
        if replaced_card == 0:
            result.append(new_card_css)
            result.append(new_card_before)
            result.append(new_card_hover)
            replaced_card += 1
        else:
            pass  # skip duplicate
        # skip next 2 lines (::before and :hover)
        i += 3
        continue
    result.append(line)
    i += 1

src = ''.join(result)

# Now fix the carousel JSX
old = '''            <div className="carousel-track">
              {carouselItems.map((biz, i) => (
                <div key={biz.id} className="carousel-card"
                  style={{ opacity: 1, transform: i === carouselIndex ? 'scale(1.02)' : 'scale(0.98)', transition: 'all 0.4s ease' }}
                  onClick={() => { setSelectedBiz(biz); logView(biz); }}>
                  <div className="carousel-card-top">
                    <div className="carousel-avatar" style={{background: biz.color}}>{biz.initials}</div>
                    <div>
                      <div className="carousel-biz-name">{biz.name}</div>
                      <div className="carousel-biz-meta">📍 {biz.city} · {CATEGORIES.find(c => c.id === biz.category)?.label}</div>
                      <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                        <div className="carousel-spotlight-badge">✦ Spotlight</div>
                        <button className="carousel-view-btn" onClick={e => { e.stopPropagation(); setSelectedBiz(biz); }}>View Details →</button>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-desc">{biz.description}</div>
                  <div className="carousel-footer">
                    <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
                      <a className="carousel-phone" href={`tel:${biz.phone}`} onClick={e => e.stopPropagation()}>{biz.phone}</a>
                      <div style={{display:"inline-flex",alignItems:"center",gap:"0.4rem"}}>
                        {biz.verified
                          ? <span className="verified-badge">✓ Verified</span>
                          : <span className="unverified-badge">Unverified</span>
                        }
                        {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={`https://instagram.com/${biz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.2rem 0.4rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          </a>
                        )}
                        {biz.facebook && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={biz.facebook.startsWith('http') ? biz.facebook : `https://facebook.com/${biz.facebook.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#1877F2",padding:"0.2rem 0.4rem",background:"rgba(24,119,242,0.1)",border:"1px solid rgba(24,119,242,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>'''
new = '''            <div className="carousel-track-outer">
              <div className="carousel-track" style={{transform:`translateX(-${carouselIndex * 100}%)`}}>
                {carouselItems.map((biz) => (
                  <div key={biz.id} className="carousel-card" onClick={() => { setSelectedBiz(biz); logView(biz); }}>
                    <div className="carousel-card-top">
                      <div className="carousel-avatar" style={{background: biz.color}}>{biz.initials}</div>
                      <div style={{flex:1}}>
                        <div className="carousel-biz-name">{biz.name}</div>
                        <div className="carousel-biz-meta">📍 {biz.city} · {CATEGORIES.find(c => c.id === biz.category)?.label}</div>
                        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap",marginTop:"0.25rem"}}>
                          <div className="carousel-spotlight-badge">✦ Spotlight</div>
                          <button className="carousel-view-btn" onClick={e => { e.stopPropagation(); setSelectedBiz(biz); }}>View Details →</button>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-desc">{biz.description}</div>
                    <div className="carousel-footer">
                      <div style={{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"}}>
                        <a className="carousel-phone" href={`tel:${biz.phone}`} onClick={e => e.stopPropagation()}>{biz.phone}</a>
                        {biz.verified
                          ? <span className="verified-badge">✓ Verified</span>
                          : <span className="unverified-badge">Unverified</span>
                        }
                        {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={`https://instagram.com/${biz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.2rem 0.4rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          </a>
                        )}
                        {biz.facebook && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={biz.facebook.startsWith('http') ? biz.facebook : `https://facebook.com/${biz.facebook.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#1877F2",padding:"0.2rem 0.4rem",background:"rgba(24,119,242,0.1)",border:"1px solid rgba(24,119,242,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>'''
assert src.count(old) == 1, f"carousel JSX not found"
src = src.replace(old, new)

# Remove auto-advance timer
src = src.replace('''  useEffect(() => {
    if (carouselItems.length <= 1) return;
    const timer = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);''', '')

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
