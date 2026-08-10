// Generates per-route HTML files for GitHub Pages so every route
// returns HTTP 200 with its own title and canonical URL, plus a
// 404.html SPA fallback for unknown paths.
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const dist = resolve(import.meta.dirname, '../dist')
const indexHtml = readFileSync(resolve(dist, 'index.html'), 'utf8')

const routes = [
  {
    file: 'selected-works.html',
    canonical: 'https://kianaehsani.com/selected-works',
    title: 'Selected Works — Kiana Ehsani',
    description: "Selected publications and research by Kiana Ehsani.",
  },
  {
    file: 'mountains.html',
    canonical: 'https://kianaehsani.com/mountains',
    title: 'Mountains — Kiana Ehsani',
    description: "Kiana Ehsani's mountaineering adventures.",
  },
  {
    file: 'travel-checklist.html',
    canonical: 'https://kianaehsani.com/travel-checklist',
    title: 'International Travel Checklist — Kiana Ehsani',
    description: 'International travel checklist.',
  },
]

for (const route of routes) {
  const html = indexHtml
    .replace('<title>Kiana Ehsani</title>', `<title>${route.title}</title>`)
    .replace(
      '<link rel="canonical" href="https://kianaehsani.com/" />',
      `<link rel="canonical" href="${route.canonical}" />`
    )
    .replace(
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${route.description}" />`
    )
  writeFileSync(resolve(dist, route.file), html)
}

// 404 fallback: renders the SPA but must not be indexed and carries no canonical
const notFound = indexHtml
  .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />')
  .replace('<link rel="canonical" href="https://kianaehsani.com/" />\n', '')
writeFileSync(resolve(dist, '404.html'), notFound)

console.log('postbuild: wrote', routes.map((r) => r.file).join(', '), 'and 404.html')
