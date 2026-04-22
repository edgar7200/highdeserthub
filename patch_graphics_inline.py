with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

darkInput = 'style={{background:"#1A1A1A",color:"var(--sand)",border:"1px solid rgba(201,168,76,0.2)"}}'
darkSelect = 'style={{background:"#1A1A1A",color:"var(--sand)",border:"1px solid rgba(201,168,76,0.2)"}}'
darkTextarea = 'style={{background:"#1A1A1A",color:"var(--sand)",border:"1px solid rgba(201,168,76,0.2)"}}'

old = '''                    <input className="form-input" placeholder="Business Name *" value={graphicsForm.bizName} onChange={e => setGraphicsForm(p => ({...p, bizName: e.target.value}))} />
                    <input className="form-input" placeholder="Email or Phone *" value={graphicsForm.contact} onChange={e => setGraphicsForm(p => ({...p, contact: e.target.value}))} />
                    <select className="form-select" value={graphicsForm.bizType} onChange={e => setGraphicsForm(p => ({...p, bizType: e.target.value}))}>'''
new = f'''                    <input className="form-input" {darkInput} placeholder="Business Name *" value={{graphicsForm.bizName}} onChange={{e => setGraphicsForm(p => ({{...p, bizName: e.target.value}}))}} />
                    <input className="form-input" {darkInput} placeholder="Email or Phone *" value={{graphicsForm.contact}} onChange={{e => setGraphicsForm(p => ({{...p, contact: e.target.value}}))}} />
                    <select className="form-select" {darkSelect} value={{graphicsForm.bizType}} onChange={{e => setGraphicsForm(p => ({{...p, bizType: e.target.value}}))}}>'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
