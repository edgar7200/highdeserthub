with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''                        {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={`https://instagram.com/${biz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.2rem 0.4rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          </a>
                        )}'''
new = '''                        {biz.instagram && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={`https://instagram.com/${biz.instagram.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#C13584",padding:"0.2rem 0.4rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                          </a>
                        )}
                        {biz.facebook && ['standard','featured','premium'].includes(biz.tier) && (
                          <a href={biz.facebook.startsWith('http') ? biz.facebook : `https://facebook.com/${biz.facebook.replace('@','')}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display:"inline-flex",alignItems:"center",color:"#1877F2",padding:"0.2rem 0.4rem",background:"rgba(24,119,242,0.1)",border:"1px solid rgba(24,119,242,0.3)",borderRadius:"2rem"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                          </a>
                        )}'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
