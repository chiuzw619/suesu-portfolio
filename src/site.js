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
// positioned elements. height is the full page height (measured from the original site).
export const layout = {
  home: { height: 814 },
  project: { height: 17668 },
  exhibition: { height: 13101 },
  illustration: { height: 10147 },
  'graphic-design': { height: 5571 },
  contact: { height: 2864 },
}

export const image = (section, number) => `${siteRoot}images/${section}/${section}-${number}.avif`
