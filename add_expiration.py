with open('src/App.jsx', 'r') as f:
    content = f.read()

# ── 1. ADD expiresOn TO ALL FREE BUSINESSES ──────────────────
# All current listings added April 2026 expire July 2026
free_businesses = [
    "G&S Rolloff Rentals",
    "Agape Pest Control",
    "High Desert General Construction",
    "Alvarez Appliances",
    "Fence-MD",
    "Field Fix",
    "DBS Disposal",
    "SoCal Pest Pros",
    "Kiki Landscaping",
    "Miss Cleandipity",
    "Empire RE Properties",
    "Virginia's Drinking Water",
    "Carlos Barber",
    "Clean Bee & Co",
    "De La Torre Handyman",
    "Dog Waste Removal",
    "Eliss Mariscos",
    "FreshStead Cleaning Service",
    "HD Pest Control",
    "HQE High Quality Epoxy Floors",
    "M.A.G.Z. Welding Mobile Services",
    "Ortiz Welding",
    "Sherwood Handyman Services",
    "SoCalHi Driving Lessons",
    "Steam Carpet Cleaning",
    "The Party Pooper Scoopers LLC",
]

for biz in free_businesses:
    content = content.replace(
        f'    name: "{biz}",\n    category',
        f'    name: "{biz}",\n    expiresOn: "July 2026",\n    category'
    )

# ── 2. ADD EXPIRATION LOGIC STATE ────────────────────────────
old_state = "  const [socialOnly, setSocialOnly] = useState(false);"
new_state = """  const [socialOnly, setSocialOnly] = useState(false);

  const getExpirationStatus = (biz) => {
    if (biz.tier !== 'free') return 'active';
    if (!biz.expiresOn) return 'active';
    const months = {'January':0,'February':1,'March':2,'April':3,'May':4,'June':5,'July':6,'August':7,'September':8,'October':9,'November':10,'December':11};
    const parts = biz.expiresOn.split(' ');
    const expDate = new Date(parseInt(parts[1]), months[parts[0]], 1);
    const now = new Date();
    const daysUntil = Math.floor((expDate - now) / (1000 * 60 * 60 * 24));
    if (daysUntil < 0) return 'expired';
    if (daysUntil <= 30) return 'expiring';
    return 'active';
  };"""

content = content.replace(old_state, new_state)

# ── 3. ADD EXPIRATION CSS ─────────────────────────────────────
old_css = ".spotlight-card-badge {"
new_css = """.expiring-badge { position: absolute; top: 0.75rem; left: 0.75rem; background: #E8A030; color: #0D1B2A; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 2rem; z-index: 2; }
.expired-badge { position: absolute; top: 0.75rem; left: 0.75rem; background: #C0392B; color: white; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.2rem 0.55rem; border-radius: 2rem; z-index: 2; }
.expired-card { opacity: 0.7; }
.spotlight-card-badge {"""

content = content.replace(old_css, new_css)

# ── 4. ADD EXPIRATION BADGES TO BUSINESS CARDS ───────────────
old_card_badges = """                {biz.carousel && (
                  <div className="spotlight-card-badge">⭐ Spotlight</div>
                )}"""

new_card_badges = """                {biz.carousel && (
                  <div className="spotlight-card-badge">⭐ Spotlight</div>
                )}
                {getExpirationStatus(biz) === 'expiring' && (
                  <div className="expiring-badge">⏰ Renewal Due</div>
                )}
                {getExpirationStatus(biz) === 'expired' && (
                  <div className="expired-badge">⚠️ Unconfirmed</div>
                )}"""

content = content.replace(old_card_badges, new_card_badges)

# ── 5. ADD EXPIRED CLASS TO CARD ─────────────────────────────
old_card_class = """                  className={`biz-card ${biz.tier === "featured" ? "featured-card" : ""} ${biz.carousel ? "spotlight-card-border" : ""}`}"""
new_card_class = """                  className={`biz-card ${biz.tier === "featured" ? "featured-card" : ""} ${biz.carousel ? "spotlight-card-border" : ""} ${getExpirationStatus(biz) === 'expired' ? "expired-card" : ""}`}"""

content = content.replace(old_card_class, new_card_class)

# ── 6. ADD EXPIRATION INFO TO MODAL ──────────────────────────
old_modal_date = """              <div className="modal-date-row">
                <span>📅 Listed: {selectedBiz.dateAdded}</span>
                <span>✓ Verified: {selectedBiz.lastVerified}</span>
              </div>"""

new_modal_date = """              <div className="modal-date-row">
                <span>📅 Listed: {selectedBiz.dateAdded}</span>
                <span>✓ Verified: {selectedBiz.lastVerified}</span>
                {selectedBiz.expiresOn && selectedBiz.tier === 'free' && (
                  <span style={{
                    color: getExpirationStatus(selectedBiz) === 'expired' ? '#C0392B' :
                           getExpirationStatus(selectedBiz) === 'expiring' ? '#E8A030' : 'var(--muted)'
                  }}>
                    🔄 Renews: {selectedBiz.expiresOn}
                  </span>
                )}
              </div>"""

content = content.replace(old_modal_date, new_modal_date)

with open('src/App.jsx', 'w') as f:
    f.write(content)

print('Done! Expiration system added.')
print('All free listings expire: July 2026')
print('Expiring badge appears 30 days before: June 2026')
print('Expired badge appears after: July 2026')
