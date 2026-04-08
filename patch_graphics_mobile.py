with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <p className="contact-popup-sub">
              You selected <strong>{contactTier}</strong>. Reach out and we'll get you set up right away.
            </p>
            {contactTier === "Social Media Graphics" ? (
              <div style={{width:"100%"}}>
                <div style={{fontSize:"1.1rem",fontWeight:700,color:"var(--gold)",marginBottom:"6px",textAlign:"center"}}>Social Media Graphics for Your Business</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px",justifyContent:"center",marginBottom:"12px"}}>
                  <span style={{background:"var(--bg)",borderRadius:"8px",padding:"6px 12px",fontSize:"0.8rem"}}>✓ Services menu graphics</span>
                  <span style={{background:"var(--bg)",borderRadius:"8px",padding:"6px 12px",fontSize:"0.8rem"}}>✓ Promo and deal posts</span>
                  <span style={{background:"var(--bg)",borderRadius:"8px",padding:"6px 12px",fontSize:"0.8rem"}}>✓ Brand-matched design</span>
                  <span style={{background:"var(--bg)",borderRadius:"8px",padding:"6px 12px",fontSize:"0.8rem"}}>✓ Ready to post on Instagram and Facebook</span>
                </div>'''
new = '''          <div className="contact-popup" onClick={(e) => e.stopPropagation()} style={{position:"relative"}}>
            <button onClick={() => setShowContactPopup(false)} style={{position:"sticky",top:0,float:"right",background:"rgba(0,0,0,0.08)",border:"none",borderRadius:"50%",width:"28px",height:"28px",fontSize:"1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,zIndex:10}}>✕</button>
            <p className="contact-popup-sub">
              You selected <strong>{contactTier}</strong>. Reach out and we'll get you set up right away.
            </p>
            {contactTier === "Social Media Graphics" ? (
              <div style={{width:"100%"}}>
                <div style={{fontSize:"1.1rem",fontWeight:700,color:"var(--gold)",marginBottom:"6px",textAlign:"center"}}>Social Media Graphics for Your Business</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",marginBottom:"12px"}}>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Services menu graphics</span>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Promo and deal posts</span>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Brand-matched design</span>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Ready to post on Instagram and Facebook</span>
                </div>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
