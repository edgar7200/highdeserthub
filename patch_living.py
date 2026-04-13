with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

# ── 1. Add showLiving state after showContactPopup state ─────────────────────
old = "  const [showContactPopup, setShowContactPopup] = useState(false);"
new = "  const [showContactPopup, setShowContactPopup] = useState(false);\n  const [showLiving, setShowLiving] = useState(false);"
assert src.count(old) == 1, f"showContactPopup state not found (count={src.count(old)})"
src = src.replace(old, new)

# ── 2. Add High Desert Living nav button ─────────────────────────────────────
old = "          <li><a href=\"#\" className=\"nav-btn-gold\">Local Events</a></li>"
new = "          <li><a href=\"#\" className=\"nav-btn-gold\">Local Events</a></li>\n          <li><a href=\"#\" className=\"nav-btn-gold\" onClick={(e) => { e.preventDefault(); setShowLiving(true); }}>High Desert Living</a></li>"
assert src.count(old) == 1, f"nav gold anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# ── 3. Add CTA banner button under Social Media Graphics ────────────────────
old = '            <button className="cta-btn-ghost" onClick={() => { handlePricingContact("Social Media Graphics"); }}>🎨 Get Social Media Graphics</button>'
new = '            <button className="cta-btn-ghost" onClick={() => { handlePricingContact("Social Media Graphics"); }}>🎨 Get Social Media Graphics</button>\n            <button className="cta-btn-ghost" onClick={() => setShowLiving(true)}>🏡 High Desert Living</button>'
assert src.count(old) == 1, f"cta graphics anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# ── 4. Add CSS for living page ───────────────────────────────────────────────
old = ".admin-gate { min-height: 100vh;"
new = """.living-page { position: fixed; inset: 0; background: var(--sand); z-index: 500; overflow-y: auto; }
.living-nav { background: var(--navy); padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-bottom: 3px solid var(--terra); position: sticky; top: 0; z-index: 10; }
.living-nav-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 800; color: var(--sand); }
.living-nav-title span { color: var(--gold); }
.living-hero { background: var(--navy); padding: 3rem 2rem; position: relative; overflow: hidden; }
.living-hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(196,96,58,0.15) 0%, transparent 70%); pointer-events: none; }
.living-hero-inner { max-width: 860px; margin: 0 auto; position: relative; z-index: 1; }
.living-hero-eyebrow { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(196,96,58,0.2); border: 1px solid rgba(196,96,58,0.4); color: var(--gold); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.35rem 0.85rem; border-radius: 2rem; margin-bottom: 1rem; }
.living-hero-title { font-family: 'Syne', sans-serif; font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 800; color: var(--sand); line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 0.75rem; }
.living-hero-title em { font-style: normal; color: var(--terra); }
.living-hero-sub { color: rgba(247,240,230,0.6); font-size: 1rem; max-width: 500px; line-height: 1.7; font-weight: 300; }
.living-body { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem; display: flex; flex-direction: column; gap: 3rem; }
.living-section { background: var(--cream); border: 1.5px solid #E8DDD0; border-radius: 16px; overflow: hidden; }
.living-section-header { padding: 1.5rem 2rem; border-bottom: 1.5px solid #E8DDD0; display: flex; align-items: center; gap: 1rem; }
.living-section-icon { font-size: 1.75rem; }
.living-section-title { font-family: 'Syne', sans-serif; font-size: 1.3rem; font-weight: 800; color: var(--ink); }
.living-section-sub { font-size: 0.82rem; color: var(--muted); margin-top: 0.15rem; }
.living-section-sponsor { margin-left: auto; font-size: 0.72rem; color: var(--muted); font-style: italic; }
.living-items { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1.25rem; }
.living-item { display: flex; gap: 1rem; align-items: flex-start; padding-bottom: 1.25rem; border-bottom: 1px solid #EDE5D8; }
.living-item:last-child { border-bottom: none; padding-bottom: 0; }
.living-item-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 0.1rem; }
.living-item-content { flex: 1; }
.living-item-title { font-family: 'Syne', sans-serif; font-size: 0.95rem; font-weight: 700; color: var(--ink); margin-bottom: 0.35rem; }
.living-item-desc { font-size: 0.85rem; color: #5C5248; line-height: 1.6; }
.living-item-link { display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem; color: var(--terra); font-size: 0.8rem; font-weight: 600; text-decoration: none; }
.living-item-link:hover { text-decoration: underline; }
.living-resources-grid { padding: 1.5rem 2rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
@media (max-width: 600px) { .living-resources-grid { grid-template-columns: 1fr; } }
.living-resource-card { background: #F7F0E6; border: 1.5px solid #E8DDD0; border-radius: 10px; padding: 1rem 1.25rem; }
.living-resource-card-title { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 700; color: var(--ink); margin-bottom: 0.5rem; }
.living-resource-row { display: flex; justify-content: space-between; font-size: 0.78rem; padding: 0.25rem 0; border-bottom: 1px solid #EDE5D8; color: #5C5248; }
.living-resource-row:last-child { border-bottom: none; }
.living-resource-phone { color: var(--terra); font-weight: 600; }
.living-tip-form { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
.living-tip-success { padding: 2rem; text-align: center; }
.living-tip-success-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.living-tip-success-title { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 800; color: var(--ink); }
.admin-gate { min-height: 100vh;"""
assert src.count(old) == 1, f"css admin-gate anchor not found (count={src.count(old)})"
src = src.replace(old, new)

# ── 5. Add living page component before the admin page ──────────────────────
old = "      {/* ADMIN PAGE */}"
new = """      {/* HIGH DESERT LIVING PAGE */}
      {showLiving && (
        <div className="living-page">
          <div className="living-nav">
            <div className="living-nav-title">High<span>Desert</span>Hub</div>
            <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
              <span style={{background:'var(--terra)',color:'white',fontSize:'0.7rem',fontWeight:700,padding:'0.25rem 0.75rem',borderRadius:'2rem',letterSpacing:'0.08em',textTransform:'uppercase'}}>High Desert Living</span>
              <button onClick={() => setShowLiving(false)} style={{background:'transparent',border:'1px solid rgba(247,240,230,0.3)',color:'var(--sand)',padding:'0.35rem 0.85rem',borderRadius:'4px',cursor:'pointer',fontSize:'0.8rem',fontFamily:"'DM Sans',sans-serif"}}>← Back</button>
            </div>
          </div>

          <div className="living-hero">
            <div className="living-hero-inner">
              <div className="living-hero-eyebrow">🏡 High Desert Living</div>
              <h1 className="living-hero-title">Live Smart in the <em>High Desert</em></h1>
              <p className="living-hero-sub">Consumer safety tips, local resources, and everything you need to thrive in Victorville, Hesperia, Apple Valley, and Adelanto.</p>
            </div>
          </div>

          <div className="living-body">

            {/* CONSUMER SAFETY */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">🔍</div>
                <div>
                  <div className="living-section-title">Consumer Safety</div>
                  <div className="living-section-sub">Protect yourself before you hire</div>
                </div>
              </div>
              <div className="living-items">
                <div className="living-item">
                  <div className="living-item-icon">📋</div>
                  <div className="living-item-content">
                    <div className="living-item-title">How to Verify a Contractor License in California</div>
                    <div className="living-item-desc">Before hiring any contractor, always check their license on the California State License Board website. Enter their license number and confirm it is active, bonded, and insured. Unlicensed contractors have no accountability if something goes wrong.</div>
                    <a href="https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx" target="_blank" rel="noopener noreferrer" className="living-item-link">→ Check a License on CSLB.ca.gov</a>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🚩</div>
                  <div className="living-item-content">
                    <div className="living-item-title">5 Red Flags When Hiring a Local Service</div>
                    <div className="living-item-desc">Watch out for: no written estimate, cash only payment, no license number provided, high-pressure tactics to decide immediately, and no verifiable local address. Any one of these should make you pause before signing anything.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🏠</div>
                  <div className="living-item-content">
                    <div className="living-item-title">How to Avoid Home Improvement Scams</div>
                    <div className="living-item-desc">Common scams in the High Desert include door-to-door roofing offers after storms, driveway sealing scams, and tree trimming overcharges. Always get at least two written estimates and never pay more than 10% upfront.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">📝</div>
                  <div className="living-item-content">
                    <div className="living-item-title">How to File a Complaint</div>
                    <div className="living-item-desc">If you have a bad experience with a local business, you can file complaints with the Better Business Bureau, the California State License Board, or the California Attorney General's office. Documentation and photos are key.</div>
                    <a href="https://www.bbb.org/file-a-complaint" target="_blank" rel="noopener noreferrer" className="living-item-link">→ File a BBB Complaint</a>
                  </div>
                </div>
              </div>
            </div>

            {/* BARGAIN HUNTING */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">💰</div>
                <div>
                  <div className="living-section-title">Bargain Hunting</div>
                  <div className="living-section-sub">Stretch your dollar in the High Desert</div>
                </div>
              </div>
              <div className="living-items">
                <div className="living-item">
                  <div className="living-item-icon">🛍️</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Best Swap Meets and Flea Markets</div>
                    <div className="living-item-desc">The Apple Valley Swap Meet and Victorville Swap Meet are weekend staples for deals on tools, clothing, electronics, and more. Bring cash, arrive early, and don't be afraid to negotiate.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🛋️</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Where to Find Free and Discounted Appliances</div>
                    <div className="living-item-desc">Check Facebook Marketplace for local appliance deals, visit the Habitat for Humanity ReStore in the High Desert for discounted furniture and appliances, and watch Craigslist for free items posted by neighbors.</div>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">🥫</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Free Community Resources</div>
                    <div className="living-item-desc">San Bernardino County offers food assistance, utility bill help, and rental support programs. Contact 211 (dial 2-1-1) for a free referral to local services near you — available 24 hours a day.</div>
                    <a href="https://www.211sb.org" target="_blank" rel="noopener noreferrer" className="living-item-link">→ Visit 211sb.org</a>
                  </div>
                </div>
                <div className="living-item">
                  <div className="living-item-icon">💊</div>
                  <div className="living-item-content">
                    <div className="living-item-title">Save on Prescriptions</div>
                    <div className="living-item-desc">GoodRx and Mark Cuban's Cost Plus Drugs offer significant savings on prescriptions for uninsured or underinsured residents. Many medications available for under $5.</div>
                    <a href="https://www.goodrx.com" target="_blank" rel="noopener noreferrer" className="living-item-link">→ Check GoodRx Prices</a>
                  </div>
                </div>
              </div>
            </div>

            {/* LOCAL RESOURCES */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">🏘️</div>
                <div>
                  <div className="living-section-title">Local Resources</div>
                  <div className="living-section-sub">Everything you need in one place</div>
                </div>
              </div>
              <div className="living-resources-grid">
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🏛️ City Contacts</div>
                  <div className="living-resource-row"><span>Victorville City Hall</span><a href="tel:7609555000" className="living-resource-phone">(760) 955-5000</a></div>
                  <div className="living-resource-row"><span>Hesperia City Hall</span><a href="tel:7609471000" className="living-resource-phone">(760) 947-1000</a></div>
                  <div className="living-resource-row"><span>Apple Valley Town Hall</span><a href="tel:7602407000" className="living-resource-phone">(760) 240-7000</a></div>
                  <div className="living-resource-row"><span>Adelanto City Hall</span><a href="tel:7602462300" className="living-resource-phone">(760) 246-2300</a></div>
                </div>
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🚨 Emergency & Safety</div>
                  <div className="living-resource-row"><span>Emergency</span><a href="tel:911" className="living-resource-phone">911</a></div>
                  <div className="living-resource-row"><span>SB County Sheriff</span><a href="tel:7603512550" className="living-resource-phone">(760) 351-2550</a></div>
                  <div className="living-resource-row"><span>Victor Valley Hospital</span><a href="tel:7602456821" className="living-resource-phone">(760) 245-8211</a></div>
                  <div className="living-resource-row"><span>Poison Control</span><a href="tel:18002221222" className="living-resource-phone">(800) 222-1222</a></div>
                </div>
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🏫 School Districts</div>
                  <div className="living-resource-row"><span>VVUHSD</span><a href="tel:7602452476" className="living-resource-phone">(760) 245-2476</a></div>
                  <div className="living-resource-row"><span>Hesperia Unified</span><a href="tel:7602447927" className="living-resource-phone">(760) 244-4411</a></div>
                  <div className="living-resource-row"><span>Apple Valley Unified</span><a href="tel:7602471357" className="living-resource-phone">(760) 247-8001</a></div>
                  <div className="living-resource-row"><span>Adelanto Elementary</span><a href="tel:7602464411" className="living-resource-phone">(760) 246-8691</a></div>
                </div>
                <div className="living-resource-card">
                  <div className="living-resource-card-title">🏢 Government Services</div>
                  <div className="living-resource-row"><span>Victorville DMV</span><a href="tel:8003687828" className="living-resource-phone">(800) 368-7828</a></div>
                  <div className="living-resource-row"><span>SB County Services</span><a href="tel:8888276228" className="living-resource-phone">(888) 743-1478</a></div>
                  <div className="living-resource-row"><span>211 Community Help</span><a href="tel:211" className="living-resource-phone">2-1-1</a></div>
                  <div className="living-resource-row"><span>Social Security</span><a href="tel:8007721213" className="living-resource-phone">(800) 772-1213</a></div>
                </div>
              </div>
            </div>

            {/* SUBMIT A TIP */}
            <div className="living-section">
              <div className="living-section-header">
                <div className="living-section-icon">📝</div>
                <div>
                  <div className="living-section-title">Submit a Tip or Resource</div>
                  <div className="living-section-sub">Know something the High Desert should know? Share it here.</div>
                </div>
              </div>
              <div className="living-tip-form">
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                  <div className="form-field">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" placeholder="Optional" />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Category</label>
                    <select className="form-select">
                      <option value="">Select...</option>
                      <option>Consumer Safety</option>
                      <option>Bargain Hunting</option>
                      <option>Local Resource</option>
                      <option>Community Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <label className="form-label">Your Tip or Resource <span style={{color:'var(--terra)'}}>*</span></label>
                  <textarea className="form-textarea" placeholder="Share something useful for the High Desert community..." rows={4} />
                </div>
                <div className="form-field">
                  <label className="form-label">Source Link (optional)</label>
                  <input className="form-input" placeholder="https://..." />
                </div>
                <button className="btn-primary" style={{maxWidth:'200px'}}>Submit Tip</button>
                <p style={{fontSize:'0.78rem',color:'var(--muted)'}}>Tips are reviewed before publishing. We appreciate your contribution to the community!</p>
              </div>
            </div>

          </div>

          <footer className="footer">
            <div className="footer-logo">High<span>Desert</span>Hub</div>
            <p className="footer-sub">Serving Victorville · Hesperia · Apple Valley · Adelanto</p>
            <p className="footer-disclaimer">Information provided is for general guidance only. Always verify details with official sources before making decisions.</p>
          </footer>
        </div>
      )}

      {/* ADMIN PAGE */}"""
assert src.count(old) == 1, f"admin page anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("All patches applied successfully.")
