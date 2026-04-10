with open("/home/ed/highdeserthub/index.html", "r") as f:
    src = f.read()

old = '    <title>High Desert Hub | Find Local Businesses</title>'
new = '''    <title>High Desert Hub | Local Business Directory — Victorville, Hesperia, Apple Valley, Adelanto</title>
    <meta name="description" content="Find trusted local businesses in Victorville, Hesperia, Apple Valley, and Adelanto. High Desert Hub is the High Desert's #1 local business directory." />
    <meta name="keywords" content="Victorville businesses, Hesperia businesses, Apple Valley businesses, Adelanto businesses, High Desert directory, local contractors, landscaping, restaurants, auto services, High Desert Hub" />
    <meta name="author" content="High Desert Hub" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://highdeserthub.com" />

    <!-- Open Graph (Facebook, LinkedIn previews) -->
    <meta property="og:title" content="High Desert Hub | Local Business Directory" />
    <meta property="og:description" content="Find trusted local businesses in Victorville, Hesperia, Apple Valley, and Adelanto. High Desert Hub is the High Desert's #1 local business directory." />
    <meta property="og:url" content="https://highdeserthub.com" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://highdeserthub.com/favicon.png" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="High Desert Hub | Local Business Directory" />
    <meta name="twitter:description" content="Find trusted local businesses in Victorville, Hesperia, Apple Valley, and Adelanto." />
    <meta name="twitter:image" content="https://highdeserthub.com/favicon.png" />'''
assert src.count(old) == 1, f"anchor not found (count={src.count(old)})"
src = src.replace(old, new)

with open("/home/ed/highdeserthub/index.html", "w") as f:
    f.write(src)

print("Done.")
