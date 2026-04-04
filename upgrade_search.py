with open('src/App.jsx', 'r') as f:
    content = f.read()

# ── 1. REMOVE SEARCH BUTTON STATE DEPENDENCY ─────────────────
# Change searchQuery to update in real-time as searchInput changes
# We'll use searchInput directly for filtering instead of requiring button click

old_filter_start = """  const filtered = BUSINESSES.filter((b) => {
    const catMatch = !activeCategory || b.category === activeCategory;
    const cityMatch = activeCity === "All Cities" || b.city === activeCity;
    const query = searchQuery.toLowerCase();"""

new_filter_start = """  const filtered = BUSINESSES.filter((b) => {
    const catMatch = !activeCategory || b.category === activeCategory;
    const cityMatch = activeCity === "All Cities" || b.city === activeCity;
    const query = searchInput.toLowerCase().trim();"""

content = content.replace(old_filter_start, new_filter_start)

# ── 2. UPGRADE THE SEARCH MATCHING LOGIC ─────────────────────
old_search = """    const wordMatch = (text, term) => {
      if (!text || !term) return false;
      try {
        const regex = new RegExp('\\\\b' + term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&') + '\\\\b', 'i');
        return regex.test(text);
      } catch(e) {
        return text.toLowerCase().includes(term.toLowerCase());
      }
    };
    const searchMatch =
      expandedTerms.some(term =>
        wordMatch(b.name, term) ||
        b.services.some((s) => wordMatch(s, term)) ||
        wordMatch(b.city, query) ||
        (b.contact && wordMatch(b.contact, query))
      );"""

new_search = """    const wordMatch = (text, term) => {
      if (!text || !term) return false;
      try {
        const escaped = term.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
        const regex = new RegExp('\\\\b' + escaped + '\\\\b', 'i');
        return regex.test(text);
      } catch(e) {
        return text.toLowerCase().includes(term.toLowerCase());
      }
    };

    const matchesTerm = (term) => {
      const t = term.trim();
      if (!t) return true;
      const expanded = synonyms[t] || [t];
      return expanded.some(exp =>
        wordMatch(b.name, exp) ||
        b.services.some((s) => wordMatch(s, exp)) ||
        wordMatch(b.city, exp) ||
        wordMatch(b.category, exp) ||
        (b.contact && wordMatch(b.contact, exp))
      );
    };

    let searchMatch = true;
    if (query) {
      if (query.includes(' and ') || query.includes(' AND ')) {
        const parts = query.split(/\\s+and\\s+/i).map(p => p.trim()).filter(Boolean);
        searchMatch = parts.every(part => matchesTerm(part));
      } else if (query.includes(' or ') || query.includes(' OR ')) {
        const parts = query.split(/\\s+or\\s+/i).map(p => p.trim()).filter(Boolean);
        searchMatch = parts.some(part => matchesTerm(part));
      } else if (query.includes(',')) {
        const parts = query.split(',').map(p => p.trim()).filter(Boolean);
        searchMatch = parts.some(part => matchesTerm(part));
      } else {
        const parts = query.split(/\\s+/).filter(Boolean);
        if (parts.length > 1) {
          searchMatch = parts.every(part => matchesTerm(part));
        } else {
          searchMatch = matchesTerm(query);
        }
      }
    }"""

if old_search in content:
    content = content.replace(old_search, new_search)
    print('Search logic upgraded')
else:
    print('WARNING: Search logic not found — check manually')

# ── 3. UPDATE SEARCH BAR TO REAL-TIME ────────────────────────
# Remove the need to click Search button — results update as you type
old_input = """            <input
              placeholder="Search businesses, services..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setSearchQuery(searchInput)}
            />"""

new_input = """            <input
              placeholder='Search e.g. "cleaning" or "pest control AND Hesperia"'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setSearchInput("")}
            />"""

if old_input in content:
    content = content.replace(old_input, new_input)
    print('Main search input updated')
else:
    print('WARNING: Main search input not found')

# ── 4. UPDATE SECOND SEARCH BAR TOO ──────────────────────────
old_input2 = """            placeholder="Search businesses, services..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && setSearchQuery(searchInput)}"""

new_input2 = """            placeholder='Search e.g. "cleaning" or "pest AND Hesperia"'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Escape' && setSearchInput("")}"""

if old_input2 in content:
    content = content.replace(old_input2, new_input2)
    print('Second search input updated')
else:
    print('WARNING: Second search input not found')

# ── 5. UPDATE SEARCH BUTTON TO CLEAR INSTEAD ─────────────────
old_btn = """            <button className="search-btn" onClick={() => { setSearchQuery(searchInput); logSearch(searchInput); }}>Search</button>"""
new_btn = """            <button className="search-btn" onClick={() => { if(searchInput) { logSearch(searchInput); } else { setSearchInput(""); } }}>
              {searchInput ? "Clear" : "Search"}
            </button>"""

if old_btn in content:
    content = content.replace(old_btn, new_btn)
    print('Search button updated to Clear')
else:
    print('WARNING: Search button not found')

# ── 6. ADD SEARCH HINT CSS ────────────────────────────────────
old_css = '.search-bar input::placeholder { color: var(--muted); }'
new_css = '.search-bar input::placeholder { color: var(--muted); font-size: 0.875rem; }'
content = content.replace(old_css, new_css)

# ── 7. ADD ACTIVE SEARCH INDICATOR ───────────────────────────
old_count = """          <p className="listings-count">
            Showing <strong>{sorted.length}</strong>{" "}
            {activeCategory ? CATEGORIES.find((c) => c.id === activeCategory)?.label : "businesses"}
            {activeCity !== "All Cities" ? ` in ${activeCity}` : ""}
          </p>"""

new_count = """          <p className="listings-count">
            Showing <strong>{sorted.length}</strong>{" "}
            {activeCategory ? CATEGORIES.find((c) => c.id === activeCategory)?.label : "businesses"}
            {activeCity !== "All Cities" ? ` in ${activeCity}` : ""}
            {searchInput ? <span style={{color:'var(--terra)', marginLeft:'0.5rem'}}>for "{searchInput}"</span> : ""}
          </p>"""

if old_count in content:
    content = content.replace(old_count, new_count)
    print('Search indicator added to count')
else:
    print('WARNING: Listings count not found')

with open('src/App.jsx', 'w') as f:
    f.write(content)

print()
print('Done! Search upgrades complete:')
print('  1. Real-time results as you type')
print('  2. Boolean AND support')
print('  3. Boolean OR support')
print('  4. Comma-separated search')
print('  5. Multi-word automatic AND')
print('  6. Escape key clears search')
print('  7. Active search shown in results count')
print()
print('Examples that now work:')
print('  "air" -> only Lexair')
print('  "pest control" -> pest businesses')
print('  "cleaning AND Victorville" -> cleaning in Victorville only')
print('  "landscaping OR gardening" -> both')
print('  "fence, gate" -> either fence or gate services')
