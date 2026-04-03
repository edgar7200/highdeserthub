with open('src/App.jsx', 'r') as f:
    content = f.read()

# ── FREE TIER ─────────────────────────────────────────────────
old_free = """              <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business name listed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Phone number</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> City & category</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business card photo</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Basic search visibility</div>
                </div>
                <button className="pricing-btn" onClick={() => { setShowPricing(false); setShowListForm(true); setFormSubmitted(false); }}>Get Listed Free</button>"""

new_free = """              <div className="pricing-sub-tag">Perfect for getting your business online in minutes.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Business name and phone listed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> City, category, and business card photo</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Basic search visibility</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> 3-month renewal required</div>
                </div>
                <button className="pricing-btn" onClick={() => { setShowPricing(false); setShowListForm(true); setFormSubmitted(false); }}>Get Listed Free</button>"""

if old_free in content:
    content = content.replace(old_free, new_free)
    print('Free tier updated')
else:
    print('WARNING: Free tier not found')

# ── STANDARD TIER ─────────────────────────────────────────────
old_standard = """              <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Logo displayed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Website link</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Social media links</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Full hours listed</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Email contact button</div>
                </div>
                <button className="pricing-btn" onClick={() => setShowPricing(false)}>Get Started</button>"""

new_standard = """              <div className="pricing-sub-tag">Turn views into real customer inquiries.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Free — no renewal ever</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Website and social media links</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Email contact button and full hours</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority over free listings</div>
                </div>
                <button className="pricing-btn" onClick={() => setShowPricing(false)}>Get Started</button>"""

if old_standard in content:
    content = content.replace(old_standard, new_standard)
    print('Standard tier updated')
else:
    print('WARNING: Standard tier not found')

# ── FEATURED TIER ─────────────────────────────────────────────
old_featured = """              <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Standard</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Top of category listing</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Gold featured badge</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Photo gallery</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Highlighted card</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority in search</div>
                </div>
                <button className="pricing-btn main" onClick={() => setShowPricing(false)}>Get Featured</button>"""

new_featured = """              <div className="pricing-sub-tag">Be the first business customers see in your category.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Standard</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Top of category placement</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Spotlight badge and highlighted listing</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel feature</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Priority in search results</div>
                </div>
                <button className="pricing-btn main" onClick={() => setShowPricing(false)}>Get Featured</button>"""

if old_featured in content:
    content = content.replace(old_featured, new_featured)
    print('Featured tier updated')
else:
    print('WARNING: Featured tier not found')

# ── PREMIUM TIER ──────────────────────────────────────────────
old_premium = """              <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Featured</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage spotlight</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Category banner ad</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly analytics report</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Social media feature post</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Dedicated support</div>
                </div>
                <button className="pricing-btn" onClick={() => setShowPricing(false)}>Go Premium</button>"""

new_premium = """              <div className="pricing-sub-tag">Own your category. Be the only name they remember.</div>
                <div className="pricing-features">
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Everything in Featured</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Homepage carousel spot</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Category banner ad</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly Social Blast — dedicated Instagram and Facebook post written and published for you</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Monthly performance report</div>
                  <div className="pricing-feature"><span className="pricing-check">✓</span> Dedicated support</div>
                </div>
                <button className="pricing-btn" onClick={() => setShowPricing(false)}>Go Premium</button>"""

if old_premium in content:
    content = content.replace(old_premium, new_premium)
    print('Premium tier updated')
else:
    print('WARNING: Premium tier not found')

# ── ADD SUBTITLE TAG CSS ──────────────────────────────────────
old_css = ".pricing-tier-name {"
new_css = """.pricing-sub-tag { font-size: 0.75rem; color: var(--muted); font-style: italic; margin-bottom: 1rem; line-height: 1.4; }
.pricing-tier.popular .pricing-sub-tag { color: rgba(247,240,230,0.5); }
.pricing-tier-name {"""

if old_css in content:
    content = content.replace(old_css, new_css)
    print('Subtitle CSS added')
else:
    print('WARNING: CSS anchor not found')

with open('src/App.jsx', 'w') as f:
    f.write(content)

print()
print('All 4 tiers updated!')
