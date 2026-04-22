with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",marginBottom:"12px"}}>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Services menu graphics</span>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Promo and deal posts</span>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Brand-matched design</span>
                  <span style={{background:"#f0ede8",borderRadius:"8px",padding:"6px 10px",fontSize:"0.78rem"}}>✓ Ready to post on Instagram and Facebook</span>
                </div>'''
new = '''                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"6px",marginBottom:"12px"}}>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Services menu graphics</span>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Promo and deal posts</span>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Brand-matched design</span>
                  <span style={{background:"rgba(201,168,76,0.08)",border:"1px solid rgba(201,168,76,0.2)",borderRadius:"2px",padding:"6px 10px",fontSize:"0.78rem",color:"var(--gold)"}}>✓ Ready to post on Instagram and Facebook</span>
                </div>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
