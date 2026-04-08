with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''                  <div className="pricing-feature"><span className="pricing-check">✓</span> Clickable website, Instagram &amp; Facebook <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display:"inline",verticalAlign:"middle"}}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#1877F2" style={{display:"inline",verticalAlign:"middle"}}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></div>'''
new = '''                  <div className="pricing-feature" style={{flexDirection:"column",alignItems:"flex-start",gap:"0.5rem"}}>
                    <span><span className="pricing-check">✓</span> Clickable website, Instagram &amp; Facebook</span>
                    <div style={{display:"flex",gap:"0.4rem",marginLeft:"1.2rem"}}>
                      <span style={{display:"inline-flex",alignItems:"center",gap:"0.3rem",color:"#C13584",padding:"0.2rem 0.6rem",background:"rgba(193,53,132,0.1)",border:"1px solid rgba(193,53,132,0.3)",borderRadius:"2rem",fontSize:"0.75rem",fontWeight:600}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                        Instagram
                      </span>
                      <span style={{display:"inline-flex",alignItems:"center",gap:"0.3rem",color:"#1877F2",padding:"0.2rem 0.6rem",background:"rgba(24,119,242,0.1)",border:"1px solid rgba(24,119,242,0.3)",borderRadius:"2rem",fontSize:"0.75rem",fontWeight:600}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        Facebook
                      </span>
                    </div>
                  </div>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
