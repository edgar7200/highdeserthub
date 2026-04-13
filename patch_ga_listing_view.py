with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    src = f.read()

old = '''                onClick={() => { setSelectedBiz(biz); logView(biz); }}'''
new = '''                onClick={() => { setSelectedBiz(biz); logView(biz); if(window.gtag) window.gtag('event', 'listing_view', { business_name: biz.name, business_city: biz.city, business_category: biz.category, business_tier: biz.tier }); }}'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.write(src)

print("Done.")
