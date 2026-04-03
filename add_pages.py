with open('src/App.jsx', 'r') as f:
    content = f.read()

# ── 1. ADD STATE FOR BOTH MODALS ──────────────────────────────
old_state = "  const [cardViewer, setCardViewer] = useState(null);"
new_state = """  const [cardViewer, setCardViewer] = useState(null);
  const [showListForm, setShowListForm] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [formData, setFormData] = useState({ name:'', phone:'', email:'', address:'', city:'', category:'', services:'', hours:'', website:'', description:'' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleFormSubmit = () => {
    if (formData.name && formData.phone && formData.email && formData.city && formData.category) {
      setFormSubmitted(true);
    }
  };"""
content = content.replace(old_state, new_state)

# ── 2. WIRE UP THE CTA BUTTONS ────────────────────────────────
old_btns = """            <button className="cta-btn-main">List My Business — Free</button>
            <button className="cta-btn-ghost">View Pricing Plans</button>"""
new_btns = """            <button className="cta-btn-main" onClick={() => { setShowListForm(true); setFormSubmitted(false); }}>List My Business — Free</button>
            <button className="cta-btn-ghost" onClick={() => setShowPricing(true)}>View Pricing Plans</button>"""
content = content.replace(old_btns, new_btns)

# ── 3. WIRE UP NAV BUTTON ─────────────────────────────────────
old_nav = '<li><a href="#" className="nav-cta">List Your Business</a></li>'
new_nav = '<li><a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); setShowListForm(true); setFormSubmitted(false); }}>List Your Business</a></li>'
content = content.replace(old_nav, new_nav)

# ── 4. ADD CSS FOR BOTH MODALS ────────────────────────────────
old_css = '.card-viewer-close:hover { background: rgba(255,255,255,0.2); }'
new_css = """.card-viewer-close:hover { background: rgba(255,255,255,0.2); }

.form-modal-overlay { position: fixed; inset: 0; background: rgba(13,27,42,0.75); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1.5rem; backdrop-filter: blur(4px); }
.form-modal { background: var(--cream); border-radius: 16px; max-width: 600px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }
.form-modal-header { padding: 1.75rem 2rem 1.25rem; border-bottom: 1.5px solid #E8DDD0; }
.form-modal-title { font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: var(--ink); margin-bottom: 0.25rem; }
.form-modal-sub { font-size: 0.875rem; color: var(--muted); }
.form-body { padding: 1.5rem 2rem; display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 500px) { .form-row { grid-template-columns: 1fr; } }
.form-field { display: flex; flex-direction: column; gap: 0.4rem; }
.form-label { font-size: 0.8rem; font-weight: 600; color: var(--ink); letter-spacing: 0.02em; text-transform: uppercase; }
.form-label span { color: var(--terra); }
.form-input { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; transition: border-color 0.2s; width: 100%; }
.form-input:focus { border-color: var(--terra); }
.form-select { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; width: 100%; cursor: pointer; }
.form-textarea { border: 1.5px solid #E8DDD0; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; font-family: 'DM Sans', sans-serif; color: var(--ink); background: white; outline: none; resize: vertical; min-height: 80px; width: 100%; }
.form-footer { padding: 1.25rem 2rem; border-top: 1.5px solid #E8DDD0; display: flex; gap: 0.75rem; }
.form-note { padding: 0 2rem 1.25rem; font-size: 0.78rem; color: var(--muted); line-height: 1.6; }
.success-box { padding: 3rem 2rem; text-align: center; }
.success-icon { font-size: 3rem; margin-bottom: 1rem; }
.success-title { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--ink); margin-bottom: 0.75rem; }
.success-sub { color: var(--muted); font-size: 0.95rem; line-height: 1.7; max-width: 380px; margin: 0 auto 1.5rem; }

.pricing-modal { background: var(--cream); border-radius: 16px; max-width: 820px; width: 100%; max-height: 92vh; overflow-y: auto; box-shadow: 0 24px 80px rgba(0,0,0,0.3); }
.pricing-header { background: var(--navy); padding: 2.5rem 2rem 2rem; text-align: center; position: relative; }
.pricing-header::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 80% 100% at 50% 100%, rgba(196,96,58,0.2) 0%, transparent 70%); pointer-events: none; border-radius: 16px 16px 0 0; }
.pricing-header-title { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--sand); margin-bottom: 0.5rem; position: relative; z-index: 1; }
.pricing-header-sub { color: rgba(247,240,230,0.6); font-size: 0.95rem; position: relative; z-index: 1; }
.pricing-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
@media (max-width: 680px) { .pricing-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 400px) { .pricing-grid { grid-template-columns: 1fr; } }
.pricing-tier { padding: 1.75rem 1.25rem; border-right: 1.5px solid #E8DDD0; border-bottom: 1.5px solid #E8DDD0; display: flex; flex-direction: column; }
.pricing-tier:last-child { border-right: none; }
.pricing-tier.popular { background: var(--navy); position: relative; }
.pricing-popular-badge { position: absolute; top: -1px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--navy); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.2rem 0.75rem; border-radius: 0 0 6px 6px; }
.pricing-tier-name { font-family: 'Syne', sans-serif; font-size: 0.85rem; font-weight: 800; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.75rem; }
.pricing-tier.popular .pricing-tier-name { color: rgba(247,240,230,0.5); }
.pricing-price { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--ink); line-height: 1; margin-bottom: 0.25rem; }
.pricing-tier.popular .pricing-price { color: var(--sand); }
.pricing-period { font-size: 0.78rem; color: var(--muted); margin-bottom: 1.25rem; }
.pricing-tier.popular .pricing-period { color: rgba(247,240,230,0.4); }
.pricing-features { display: flex; flex-direction: column; gap: 0.6rem; flex: 1; margin-bottom: 1.5rem; }
.pricing-feature { font-size: 0.8rem; color: #5C5248; display: flex; gap: 0.5rem; align-items: flex-start; line-height: 1.4; }
.pricing-tier.popular .pricing-feature { color: rgba(247,240,230,0.7); }
.pricing-check { color: var(--sage); font-weight: 700; flex-shrink: 0; }
.pricing-tier.popular .pricing-check { color: var(--gold); }
.pricing-btn { background: #EDE5D8; color: var(--ink); border: none; padding: 0.75rem; border-radius: 8px; font-size: 0.85rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; text-align: center; transition: all 0.2s; margin-top: auto; }
.pricing-btn:hover { background: #E0D5C4; }
.pricing-btn.main { background: var(--terra); color: white; }
.pricing-btn.main:hover { background: var(--rust); }
.pricing-footer { padding: 1.25rem 2rem; border-top: 1.5px solid #E8DDD0; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
.pricing-footer-note { font-size: 0.8rem; color: var(--muted); }"""
content = content.replace(old_css, new_css)

# ── 5. ADD BOTH MODALS BEFORE CARD VIEWER ────────────────────
old_viewer = "      {/* CARD PHOTO VIEWER */}"
new_viewer = """      {/* LIST MY BUSINESS MODAL */}
      {showListForm && (
        <div className="form-modal-overlay" onClick={() => setShowListForm(false)}>
          <div className="form-modal" onClick={(e) => e.stopPropagation()}>
            {!formSubmitted ? (
              <>
                <div className="form-modal-header">
                  <div className="form-modal-title">List Your Business — Free</div>
                  <div className="form-modal-sub">Fill out the form below and we will add your listing within 24 hours.</div>
                </div>
                <div className="form-body">
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Business Name <span>*</span></label>
                      <input className="form-input" name="name" placeholder="Your business name" value={formData.name} onChange={handleFormChange} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Phone Number <span>*</span></label>
                      <input className="form-input" name="phone" placeholder="(760) 555-0000" value={formData.phone} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Email Address <span>*</span></label>
                      <input className="form-input" name="email" type="email" placeholder="you@email.com" value={formData.email} onChange={handleFormChange} />
                    </div>
                    <div className="form-field">
                      <label className="form-label">City <span>*</span></label>
                      <select className="form-select" name="city" value={formData.city} onChange={handleFormChange}>
                        <option value="">Select city...</option>
                        <option>Victorville</option>
                        <option>Hesperia</option>
                        <option>Apple Valley</option>
                        <option>Adelanto</option>
                        <option>Other High Desert</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Category <span>*</span></label>
                      <select className="form-select" name="category" value={formData.category} onChange={handleFormChange}>
                        <option value="">Select category...</option>
                        {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                      </select>
                    </div>
                    <div className="form-field">
                      <label className="form-label">Website</label>
                      <input className="form-input" name="website" placeholder="www.yourbusiness.com" value={formData.website} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Address</label>
                    <input className="form-input" name="address" placeholder="Street address, city, CA zip" value={formData.address} onChange={handleFormChange} />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Services Offered</label>
                    <input className="form-input" name="services" placeholder="e.g. Roof Repair, Installation, Gutters" value={formData.services} onChange={handleFormChange} />
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Business Hours</label>
                      <input className="form-input" name="hours" placeholder="e.g. Mon-Fri 8am-5pm" value={formData.hours} onChange={handleFormChange} />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Short Description</label>
                    <textarea className="form-textarea" name="description" placeholder="Tell residents what makes your business special..." value={formData.description} onChange={handleFormChange} />
                  </div>
                </div>
                <p className="form-note">
                  ✅ Free listings are reviewed and added within 24 hours. Want to appear at the top of your category? Ask about our Featured listing options after submitting.
                </p>
                <div className="form-footer">
                  <button className="btn-primary" onClick={handleFormSubmit}>Submit My Business</button>
                  <button className="btn-secondary" onClick={() => setShowListForm(false)}>Cancel</button>
                </div>
              </>
            ) : (
              <div className="success-box">
                <div className="success-icon">🎉</div>
                <div className="success-title">You're on the list!</div>
                <p className="success-sub">
                  Thanks for submitting <strong>{formData.name}</strong>. We will review your info and have your listing live within 24 hours. We will reach out to {formData.email} to confirm.
                </p>
                <button className="btn-primary" onClick={() => setShowListForm(false)}>Done</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRICING PLANS MODAL */}
      {showPricing && (
        <div className="form-modal-overlay" onClick={() => setShowPricing(false)}>
          <div className="pricing-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pricing-header">
              <div className="pricing-header-title">Simple, Honest Pricing</div>
              <div className="pricing-header-sub">Start free. Upgrade when you're ready to grow.</div>
            </div>
            <div className="pricing-grid">
              <div className="pricing-tier">
                <div className="pricing-tier-name">Free</div>
                <div className="pricing-price">$0</div>
                <div className="pricing-period">forever</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business name listed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Phone number</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> City & category</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business card photo</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Basic search visibility</div>
                </div>
                <button className="pricing-btn" onClick={() => { setShowPricing(false); setShowListForm(true); setFormSubmitted(false); }}>Get Listed Free</button>
              </div>
              <div className="pricing-tier">
                <div className="pricing-tier-name">Standard</div>
                <div className="pricing-price">$25</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Logo displayed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Website link</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Social media links</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Full hours listed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Email contact button</div>
                </div>
                <button className="pricing-btn" onClick={() => setShowPricing(false)}>Get Started</button>
              </div>
              <div className="pricing-tier popular">
                <div className="pricing-popular-badge">Most Popular</div>
                <div className="pricing-tier-name">Featured</div>
                <div className="pricing-price" style={{color:'var(--gold)'}}>$60</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Standard</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Top of category listing</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Gold featured badge</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Photo gallery</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Highlighted card</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority in search</div>
                </div>
                <button className="pricing-btn main" onClick={() => setShowPricing(false)}>Get Featured</button>
              </div>
              <div className="pricing-tier">
                <div className="pricing-tier-name">Premium</div>
                <div className="pricing-price">$120</div>
                <div className="pricing-period">per month</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Featured</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage spotlight</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Category banner ad</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly analytics report</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Social media feature post</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Dedicated support</div>
                </div>
                <button className="pricing-btn" onClick={() => setShowPricing(false)}>Go Premium</button>
              </div>
            </div>
            <div className="pricing-footer">
              <span className="pricing-footer-note">📞 Questions? Email us at hello@highdeserthub.com</span>
              <button className="btn-secondary" onClick={() => setShowPricing(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* CARD PHOTO VIEWER */}"""
content = content.replace(old_viewer, new_viewer)

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done! Both pages added successfully.')
