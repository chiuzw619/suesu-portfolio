export const page = document.getElementById('app')?.dataset.page || 'home'

// Each page has its own HTML file. Resolve the site root once so media and
// navigation also work inside a GitHub Pages repository subdirectory.
export const siteRoot = new URL(page === 'home' ? './' : '../', window.location.href).pathname

export const nav = [
  { id: 'home', label: 'Home', href: siteRoot },
  { id: 'project', label: 'Project', href: `${siteRoot}project/` },
  { id: 'exhibition', label: 'Exhibition', href: `${siteRoot}exhibition/` },
  { id: 'illustration', label: 'Illustration', href: `${siteRoot}illustration/` },
  { id: 'graphic-design', label: 'Graphic Design', href: `${siteRoot}graphic-design/` },
  { id: 'contact', label: 'Contact', href: `${siteRoot}contact/` },
]

// Pages reproduce the Wix desktop layout: a fixed 980px column of absolutely
// positioned elements. height is the full page height; top is where the
// bordered "Top" button sits (measured from the original site).
export const layout = {
  home: { height: 814 },
  project: { height: 17668, top: 17502 },
  exhibition: { height: 13101, top: 12935 },
  illustration: { height: 10147, top: 9742 },
  'graphic-design': { height: 5571, top: 5166 },
  contact: { height: 2864, top: 2459 },
}

export const image = (section, number) => `${siteRoot}images/${section}/${section}-${number}.avif`
