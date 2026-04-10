with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''              {selectedBiz.address && <div className="modal-row"><span className="modal-row-label">Address</span><span className="modal-row-val">{selectedBiz.address}</span></div>}'''
new = '''              {selectedBiz.address && (
  <div className="modal-row">
    <span className="modal-row-label">Address</span>
    <a href={`https://maps.google.com/?q=${encodeURIComponent(selectedBiz.address)}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link" style={{textDecoration:"underline",cursor:"pointer"}}>
      📍 {selectedBiz.address}
    </a>
  </div>
)}'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
