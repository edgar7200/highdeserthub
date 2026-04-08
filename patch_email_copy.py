with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''              {selectedBiz.email && <div className="modal-row"><span className="modal-row-label">Email</span><span className="modal-row-val link">{selectedBiz.email}</span></div>}'''
new = '''              {selectedBiz.email && (
  <div className="modal-row">
    <span className="modal-row-label">Email</span>
    {['standard','featured','premium'].includes(selectedBiz.tier)
      ? <span
          className="modal-row-val link"
          style={{cursor:"pointer",textDecoration:"underline",userSelect:"all"}}
          onClick={() => {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(selectedBiz.email).then(() => alert("Email copied: " + selectedBiz.email));
            } else {
              const el = document.createElement("textarea");
              el.value = selectedBiz.email;
              document.body.appendChild(el);
              el.select();
              document.execCommand("copy");
              document.body.removeChild(el);
              alert("Email copied: " + selectedBiz.email);
            }
          }}
          title="Click to copy email"
        >
          📋 {selectedBiz.email}
        </span>
      : <span className="modal-row-val">{selectedBiz.email}</span>
    }
  </div>
)}'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
