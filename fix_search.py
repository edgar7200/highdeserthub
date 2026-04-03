with open('src/App.jsx', 'r') as f:
    content = f.read()

old = """    const searchMatch =
      !query ||
      b.name.toLowerCase().includes(query) ||
      b.services.some((s) => s.toLowerCase().includes(query)) ||
      b.city.toLowerCase().includes(query) ||
      (b.contact && b.contact.toLowerCase().includes(query));"""

new = """    const synonyms = {
      'weed': ['weed abatement', 'landscaping', 'lawn'],
      'weed remover': ['weed abatement', 'landscaping'],
      'weed removal': ['weed abatement', 'landscaping'],
      'trash': ['junk removal', 'clean outs', 'disposal', 'dumpster'],
      'garbage': ['junk removal', 'disposal', 'dumpster'],
      'junk': ['junk removal', 'clean outs', 'disposal'],
      'hauling': ['junk removal', 'dumpster', 'disposal', 'rolloff'],
      'dump': ['dumpster', 'disposal', 'rolloff'],
      'bugs': ['pest control', 'extermination'],
      'roaches': ['pest control', 'extermination'],
      'ants': ['pest control', 'extermination'],
      'termites': ['pest control', 'extermination'],
      'insects': ['pest control', 'extermination'],
      'exterminator': ['pest control', 'extermination'],
      'plumber': ['plumbing'],
      'roofer': ['roofing'],
      'electrician': ['electrical'],
      'handyman': ['general repairs', 'remodels'],
      'house cleaning': ['cleaning', 'deep cleaning'],
      'maid': ['cleaning', 'organizing'],
      'lawn': ['landscaping', 'lawn work', 'gardening'],
      'tree': ['tree trimming', 'landscaping'],
      'sprinkler': ['sprinkler systems', 'landscaping'],
      'garden': ['gardening', 'landscaping', 'planting'],
      'fence': ['fence installation', 'fence repair'],
      'fencing': ['fence installation', 'fence repair'],
      'gate': ['custom gates', 'fence'],
      'construction': ['remodels', 'additions', 'new construction'],
      'remodel': ['remodels', 'kitchen', 'bathroom'],
      'renovation': ['remodels', 'additions'],
      'appliance': ['appliance repair', 'appliance sales'],
      'washer': ['washer repair', 'appliance repair'],
      'dryer': ['dryer repair', 'appliance repair'],
      'fridge': ['refrigerator repair', 'appliance repair'],
      'refrigerator': ['refrigerator repair', 'appliance repair'],
      'house': ['real estate', 'home buying', 'home selling'],
      'home': ['real estate', 'home buying', 'home selling'],
      'realtor': ['real estate', 'home buying'],
      'water': ['r.o. water', 'alkaline water', 'drinking water'],
      'drinking water': ['r.o. water', 'alkaline water'],
      'purified': ['r.o. water', 'alkaline water'],
      'fire': ['fire prevention', 'weed abatement'],
      'tractor': ['tractor rental', 'rolloff'],
      'dumpster': ['dumpster rental', 'rolloff'],
    };
    const expandedTerms = synonyms[query] || [query];
    const searchMatch =
      expandedTerms.some(term =>
        b.name.toLowerCase().includes(term) ||
        b.services.some((s) => s.toLowerCase().includes(term)) ||
        b.description.toLowerCase().includes(term) ||
        b.city.toLowerCase().includes(query) ||
        (b.contact && b.contact.toLowerCase().includes(query))
      );"""

if old in content:
    content = content.replace(old, new)
    with open('src/App.jsx', 'w') as f:
        f.write(content)
    print('Done! Search updated successfully.')
else:
    print('Could not find the target text. No changes made.')
