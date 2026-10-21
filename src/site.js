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
// positioned elements. height is the original page height, used until App.vue
// measures the real content (and kept as-is for Home).
export const layout = {
  home: { height: 814 },
  project: { height: 17668 },
  exhibition: { height: 13236 },
  illustration: { height: 10147 },
  'graphic-design': { height: 5571 },
  contact: { height: 2864 },
}

// Images replaced with Sue's own originals are WebP (resized from originals/, at most
// 2400px); the rest are still the .avif files downloaded from the Wix site.
const WEBP = {
  'project': [1, 2, 3, 4, 5, 6, 7],
  'graphic-design': [1, 2, 3, 4, 5, 6, 12],
  'illustration': [1, 4, 6, 7, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
  'exhibition': [2, 3, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 28, 29, 33, 36, 37, 38],
}
export const image = (section, number) =>
  `${siteRoot}images/${section}/${section}-${number}.${WEBP[section]?.includes(number) ? 'webp' : 'avif'}`
