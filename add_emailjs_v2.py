SERVICE_ID = "service_19u4v9n"
TEMPLATE_ID = "template_x2d6dlk"
PUBLIC_KEY = "OhMK9kF8OKc0gF3CL"

with open('src/App.jsx', 'r') as f:
    content = f.read()

with open('index.html', 'r') as f:
    html = f.read()

emailjs_script = '    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>\n    <script>emailjs.init("OhMK9kF8OKc0gF3CL");</script>\n'

if 'emailjs' not in html:
    html = html.replace('</head>', emailjs_script + '</head>')
    with open('index.html', 'w') as f:
        f.write(html)
    print('EmailJS added to index.html')
else:
    print('EmailJS already in index.html')

old_state = "  const [formSubmitted, setFormSubmitted] = useState(false);"
new_state = """  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);"""

if old_state in content:
    content = content.replace(old_state, new_state)
    print('State added')
else:
    print('State already updated or not found')

old_submit_a = """  const handleFormSubmit = () => {
    if (formData.name && formData.phone && formData.email && formData.city && formData.category) {
      setFormSubmitted(true);
    }
  };"""

old_submit_b = """  const handleFormSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.category) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    setFormSubmitted(true);
  };"""

new_submit = """  const handleFormSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.category) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    setFormLoading(true);
    setFormError(false);
    const templateParams = {
      business_name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      category: CATEGORIES.find(c => c.id === formData.category)?.label || formData.category,
      website: formData.website || 'Not provided',
      address: formData.address || 'Not provided',
      services: formData.services || 'Not provided',
      hours: formData.hours || 'Not provided',
      description: formData.description || 'Not provided',
    };
    window.emailjs.send('service_19u4v9n', 'template_x2d6dlk', templateParams)
      .then(() => { setFormLoading(false); setFormSubmitted(true); })
      .catch((err) => { console.error('EmailJS error:', err); setFormLoading(false); setFormError(true); });
  };"""

if old_submit_a in content:
    content = content.replace(old_submit_a, new_submit)
    print('handleFormSubmit updated')
elif old_submit_b in content:
    content = content.replace(old_submit_b, new_submit)
    print('handleFormSubmit updated')
else:
    print('WARNING: handleFormSubmit not found')

old_btn = '                  <button className="btn-primary" onClick={handleFormSubmit}>Submit My Business</button>'
new_btn = """                  <button className="btn-primary" onClick={handleFormSubmit} disabled={formLoading}>
                    {formLoading ? 'Sending...' : 'Submit My Business'}
                  </button>
                  {formError && <p style={{color:'var(--terra)',fontSize:'0.82rem',marginTop:'0.5rem'}}>Something went wrong. Please email hello@highdeserthub.com</p>}"""

if old_btn in content:
    content = content.replace(old_btn, new_btn)
    print('Submit button updated')
else:
    print('Submit button already updated or not found')

with open('src/App.jsx', 'w') as f:
    f.write(content)

print()
print('Done! Run: npm run dev to test')
