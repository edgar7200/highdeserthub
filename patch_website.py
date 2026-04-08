with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''              {selectedBiz.website && <div className="modal-row"><span className="modal-row-label">Website</span><span className="modal-row-val link">{selectedBiz.website}</span></div>}'''
new = '''              {selectedBiz.website && (
  <div className="modal-row">
    <span className="modal-row-label">Website</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <a href={selectedBiz.website.startsWith('http') ? selectedBiz.website : `https://${selectedBiz.website}`} target="_blank" rel="noopener noreferrer" className="modal-row-val link">{selectedBiz.website}</a>
      : <span className="modal-row-val">{selectedBiz.website}</span>
    }
  </div>
)}'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
