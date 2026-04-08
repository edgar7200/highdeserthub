with open("/home/ed/highdeserthub/src/App.jsx", "r") as f:
    lines = f.readlines()

# Remove lines with pricing-sub-tag for Free, Standard, Premium (lines 2887, 2901, 2941 — 1-indexed)
# Also remove flex:1 from pricing-features (line 1761)
remove_lines = {2887, 2901, 2941, 1761}

result = []
for i, line in enumerate(lines, start=1):
    if i in remove_lines:
        if i == 1761:
            result.append(line.replace("flex: 1; ", ""))
        # skip the sub-tag lines
        continue
    else:
        result.append(line)

with open("/home/ed/highdeserthub/src/App.jsx", "w") as f:
    f.writelines(result)

print("Done.")
