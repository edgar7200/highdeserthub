import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# ── 1. ADD ANALYTICS STATE & ADMIN LOGIC after the existing useState imports ──
old_state = "  const [cardViewer, setCardViewer] = useState(null);"

new_state = """  const [cardViewer, setCardViewer] = useState(null);

  // ── ADMIN ANALYTICS ──────────────────────────────────────────
  const [adminMode, setAdminMode] = useState(false);
  const [adminInput, setAdminInput] = useState('');
  const [adminError, setAdminError] = useState(false);
  const [searchLog, setSearchLog] = useState([]);
  const [viewLog, setViewLog] = useState({});
  const [categoryLog, setCategoryLog] = useState({});
  const [callLog, setCallLog] = useState({});
  const ADMIN_PASSWORD = 'hdhub2024';

  const checkAdmin = () => {
    if (adminInput === ADMIN_PASSWORD) {
      setAdminMode(true);
      setAdminError(false);
    } else {
      setAdminError(true);
    }
  };

  const isAdminPage = window.location.search.includes('admin');

  const logSearch = (q) => {
    if (q.trim()) setSearchLog(prev => [...prev, { term: q.trim().toLowerCase(), time: new Date().toLocaleTimeString() }]);
  };

  const logView = (biz) => {
    setViewLog(prev => ({ ...prev, [biz.name]: (prev[biz.name] || 0) + 1 }));
  };

  const logCategory = (cat) => {
    if (cat) setCategoryLog(prev => ({ ...prev, [cat]: (prev[cat] || 0) + 1 }));
  };

  const logCall = (biz) => {
    setCallLog(prev => ({ ...prev, [biz.name]: (prev[biz.name] || 0) + 1 }));
  };

  const topSearches = [...new Set(searchLog.map(s => s.term))]
    .map(term => ({ term, count: searchLog.filter(s => s.term === term).length }))
    .sort((a, b) => b.count - a.count).slice(0, 10);

  const topViews = Object.entries(viewLog)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count).slice(0, 10);

  const topCategories = Object.entries(categoryLog)
    .map(([cat, count]) => ({ cat, count }))
    .sort((a, b) => b.count - a.count);

  const topCalls = Object.entries(callLog)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count).slice(0, 10);"""

content = content.replace(old_state, new_state)

# ── 2. HOOK INTO SEARCH BUTTON to log searches ──
old_search_btn = 'onClick={() => setSearchQuery(searchInput)}>Search'
new_search_btn = 'onClick={() => { setSearchQuery(searchInput); logSearch(searchInput); }}>Search'
content = content.replace(old_search_btn, new_search_btn)

# ── 3. HOOK INTO CARD CLICK to log views and category ──
old_card_click = "onClick={() => setSelectedBiz(biz)}"
new_card_click = "onClick={() => { setSelectedBiz(biz); logView(biz); }}"
content = content.replace(old_card_click, new_card_click, 1)

# ── 4. HOOK INTO CATEGORY CLICK to log ──
old_cat_click = "onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}"
new_cat_click = "onClick={() => { const next = activeCategory === cat.id ? null : cat.id; setActiveCategory(next); logCategory(next); }}"
content = content.replace(old_cat_click, new_cat_click)

# ── 5. HOOK INTO CALL BUTTON to log ──
old_call = 'href={`tel:${biz.phone}`} onClick={(e) => e.stopPropagation()}'
new_call = 'href={`tel:${biz.phone}`} onClick={(e) => { e.stopPropagation(); logCall(biz); }}'
content = content.replace(old_call, new_call)

# ── 6. ADD ADMIN CSS ──
old_css_end = '.card-viewer-close:hover { background: rgba(255,255,255,0.2); }'
new_css = old_css_end + """
.admin-gate { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--navy); }
.admin-gate-box { background: var(--cream); border-radius: 16px; padding: 3rem; max-width: 400px; width: 100%; text-align: center; box-shadow: 0 24px 80px rgba(0,0,0,0.4); }
.admin-gate-title { font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: var(--ink); margin-bottom: 0.5rem; }
.admin-gate-sub { color: var(--muted); font-size: 0.875rem; margin-bottom: 2rem; }
.admin-gate input { width: 100%; border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.85rem 1rem; font-size: 1rem; font-family: 'DM Sans', sans-serif; outline: none; margin-bottom: 1rem; text-align: center; letter-spacing: 0.1em; }
.admin-gate input:focus { border-color: var(--terra); }
.admin-gate .btn-primary { width: 100%; }
.admin-error { color: var(--terra); font-size: 0.82rem; margin-top: 0.5rem; }
.admin-page { min-height: 100vh; background: #F0EBE1; }
.admin-nav { background: var(--navy); padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid var(--terra); }
.admin-nav-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); }
.admin-nav-title span { color: var(--gold); }
.admin-badge { background: var(--terra); color: white; font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 2rem; letter-spacing: 0.08em; text-transform: uppercase; }
.admin-body { max-width: 1100px; margin: 0 auto; padding: 2.5rem 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
@media (max-width: 700px) { .admin-body { grid-template-columns: 1fr; } }
.admin-card { background: var(--cream); border-radius: 12px; padding: 1.75rem; border: 1.5px solid #E8DDD0; }
.admin-card-title { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 800; color: var(--ink); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem; }
.admin-row { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0; border-bottom: 1px solid #EDE5D8; font-size: 0.875rem; }
.admin-row:last-child { border-bottom: none; }
.admin-row-label { color: #5C5248; font-weight: 500; }
.admin-row-count { background: var(--terra); color: white; font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.65rem; border-radius: 2rem; min-width: 32px; text-align: center; }
.admin-empty { color: var(--muted); font-size: 0.85rem; text-align: center; padding: 1.5rem 0; }
.admin-stat-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
.admin-stat-box { background: var(--navy); border-radius: 10px; padding: 1.25rem; text-align: center; }
.admin-stat-num { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--gold); }
.admin-stat-label { font-size: 0.75rem; color: rgba(247,240,230,0.5); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 0.25rem; }
.admin-log { max-height: 220px; overflow-y: auto; }
.admin-log-row { display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid #EDE5D8; font-size: 0.8rem; }
.admin-log-term { color: var(--ink); font-weight: 500; }
.admin-log-time { color: var(--muted); }"""
content = content.replace(old_css_end, new_css)

# ── 7. ADD ADMIN PAGE RENDER before the closing </div> of app ──
old_end = "      {/* CARD PHOTO VIEWER */}"
new_end = """      {/* ADMIN PAGE */}
      {isAdminPage && !adminMode && (
        <div className="admin-gate" style={{position:'fixed',inset:0,zIndex:500}}>
          <div className="admin-gate-box">
            <div className="admin-gate-title">🔒 Admin Access</div>
            <p className="admin-gate-sub">High Desert Hub — Analytics Dashboard</p>
            <input
              type="password"
              placeholder="Enter password"
              value={adminInput}
              onChange={(e) => setAdminInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkAdmin()}
            />
            <button className="btn-primary" onClick={checkAdmin}>Login</button>
            {adminError && <p className="admin-error">Incorrect password. Try again.</p>}
          </div>
        </div>
      )}

      {isAdminPage && adminMode && (
        <div className="admin-page" style={{position:'fixed',inset:0,zIndex:500,overflowY:'auto'}}>
          <div className="admin-nav">
            <div className="admin-nav-title">High<span>Desert</span>Hub</div>
            <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
              <span className="admin-badge">Admin Analytics</span>
              <button onClick={() => { setAdminMode(false); window.history.pushState({}, '', '/'); }}
                style={{background:'transparent',border:'1px solid rgba(247,240,230,0.3)',color:'var(--sand)',padding:'0.35rem 0.85rem',borderRadius:'4px',cursor:'pointer',fontSize:'0.8rem',fontFamily:"'DM Sans',sans-serif"}}>
                Exit
              </button>
            </div>
          </div>
          <div className="admin-body">
            {/* OVERVIEW STATS */}
            <div className="admin-card" style={{gridColumn:'1/-1'}}>
              <div className="admin-card-title">📊 Overview</div>
              <div className="admin-stat-grid">
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{searchLog.length}</div>
                  <div className="admin-stat-label">Total Searches</div>
                </div>
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{Object.values(viewLog).reduce((a,b)=>a+b,0)}</div>
                  <div className="admin-stat-label">Listing Views</div>
                </div>
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{Object.values(callLog).reduce((a,b)=>a+b,0)}</div>
                  <div className="admin-stat-label">Calls Clicked</div>
                </div>
                <div className="admin-stat-box">
                  <div className="admin-stat-num">{BUSINESSES.length}</div>
                  <div className="admin-stat-label">Total Listings</div>
                </div>
              </div>
            </div>

            {/* TOP SEARCHES */}
            <div className="admin-card">
              <div className="admin-card-title">🔍 Top Searches</div>
              {topSearches.length === 0
                ? <p className="admin-empty">No searches yet</p>
                : topSearches.map((s,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">"{s.term}"</span>
                    <span className="admin-row-count">{s.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* TOP VIEWED LISTINGS */}
            <div className="admin-card">
              <div className="admin-card-title">👁️ Most Viewed Listings</div>
              {topViews.length === 0
                ? <p className="admin-empty">No views tracked yet</p>
                : topViews.map((v,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">{v.name}</span>
                    <span className="admin-row-count">{v.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* TOP CATEGORIES */}
            <div className="admin-card">
              <div className="admin-card-title">📂 Top Categories</div>
              {topCategories.length === 0
                ? <p className="admin-empty">No category clicks yet</p>
                : topCategories.map((c,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">{CATEGORIES.find(cat=>cat.id===c.cat)?.label || c.cat}</span>
                    <span className="admin-row-count">{c.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* TOP CALLS */}
            <div className="admin-card">
              <div className="admin-card-title">📞 Most Called Businesses</div>
              {topCalls.length === 0
                ? <p className="admin-empty">No calls tracked yet</p>
                : topCalls.map((c,i) => (
                  <div key={i} className="admin-row">
                    <span className="admin-row-label">{c.name}</span>
                    <span className="admin-row-count">{c.count}x</span>
                  </div>
                ))
              }
            </div>

            {/* LIVE SEARCH LOG */}
            <div className="admin-card" style={{gridColumn:'1/-1'}}>
              <div className="admin-card-title">📝 Live Search Log</div>
              {searchLog.length === 0
                ? <p className="admin-empty">Searches will appear here in real time</p>
                : <div className="admin-log">
                    {[...searchLog].reverse().map((s,i) => (
                      <div key={i} className="admin-log-row">
                        <span className="admin-log-term">"{s.term}"</span>
                        <span className="admin-log-time">{s.time}</span>
                      </div>
                    ))}
                  </div>
              }
            </div>
          </div>
        </div>
      )}

      {/* CARD PHOTO VIEWER */}"""

content = content.replace(old_end, new_end)

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done! Admin analytics page added.')
