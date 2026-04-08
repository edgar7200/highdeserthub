import re

with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''      instagram: obj.instagram || "",
      license: obj.license || "",'''
new = '''      instagram: obj.instagram || "",
      facebook: obj.facebook || "",
      otherSocial: obj.otherSocial || "",
      license: obj.license || "",'''
assert src.count(old) == 1, f"parseCSV instagram anchor not found (count={src.count(old)})"
src = src.replace(old, new)

old = '''                    {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
                      <a href={`https://instagram.com/${biz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.2rem 0.4rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      </a>
                    )}
                  </div>
                  <button className={`thumbs-btn'''
new = '''                    {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
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
                  <button className={`thumbs-btn'''
assert src.count(old) == 1, f"biz-card Instagram pill anchor not found (count={src.count(old)})"
src = src.replace(old, new)

old = '''              {selectedBiz.instagram && (
  <div className="modal-row">
    <span className="modal-row-label">Instagram</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <a href={`https://instagram.com/${selectedBiz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          {selectedBiz.instagram}
        </a>
      : <span className="modal-row-val">{selectedBiz.instagram}</span>
    }
  </div>
)}'''
new = '''              {selectedBiz.instagram && (
  <div className="modal-row">
    <span className="modal-row-label">Instagram</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <a href={`https://instagram.com/${selectedBiz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          {selectedBiz.instagram}
        </a>
      : <span className="modal-row-val">{selectedBiz.instagram}</span>
    }
  </div>
)}
              {selectedBiz.facebook && ['standard','featured','premium'].includes(selectedBiz.tier) && (
  <div className="modal-row">
    <span className="modal-row-label">Facebook</span>
    <a href={selectedBiz.facebook.startsWith('http') ? selectedBiz.facebook : `https://facebook.com/${selectedBiz.facebook.replace('@','')}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#1877F2"}}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      {selectedBiz.facebook}
    </a>
  </div>
)}
              {selectedBiz.otherSocial && ['standard','featured','premium'].includes(selectedBiz.tier) && (() => {
  const raw = selectedBiz.otherSocial;
  const lower = raw.toLowerCase();
  let platform = "Other Social";
  let href = raw.startsWith('http') ? raw : `https://${raw}`;
  let icon = null;
  if (lower.includes('tiktok')) {
    platform = "TikTok";
    href = raw.startsWith('http') ? raw : `https://tiktok.com/@${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#010101"}}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z"/></svg>;
  } else if (lower.includes('youtube')) {
    platform = "YouTube";
    href = raw.startsWith('http') ? raw : `https://youtube.com/@${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#FF0000"}}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>;
  } else if (lower.includes('twitter') || lower.includes('x.com')) {
    platform = "X (Twitter)";
    href = raw.startsWith('http') ? raw : `https://x.com/${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#000000"}}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
  } else if (lower.includes('linkedin')) {
    platform = "LinkedIn";
    href = raw.startsWith('http') ? raw : `https://linkedin.com/in/${raw.replace('@','')}`;
    icon = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color:"#0A66C2"}}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>;
  }
  return (
    <div className="modal-row">
      <span className="modal-row-label">{platform}</span>
      <a href={href} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
        {icon}
        {raw}
      </a>
    </div>
  );
})()}'''
assert src.count(old) == 1, f"modal Instagram row anchor not found (count={src.count(old)})"
src = src.replace(old, new)

old = "const hasSocial = !!(b.instagram || b.facebook);"
new = "const hasSocial = !!(b.instagram || b.facebook || b.otherSocial);"
assert src.count(old) == 1, f"hasSocial anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("All patches applied successfully.")
