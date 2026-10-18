import { build } from 'vite'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

await build()
const serverDir = 'node_modules/.cache/supersidan-prerender'
await build({ build: { ssr: 'src/entry-server.jsx', outDir: serverDir, emptyOutDir: true } })
const { render, pages, siteUrl } = await import(pathToFileURL(resolve(serverDir, 'entry-server.js')))
const origin = new URL(siteUrl)
if (!['https:', 'http:'].includes(origin.protocol) || origin.origin !== siteUrl) {
  throw new Error('VITE_SITE_URL must be an origin, for example https://supersidan.se')
}
const template = await readFile('dist/index.html', 'utf8')
const scripts = [...template.matchAll(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>/g)].map(match => match[1])
const styles = [...template.matchAll(/<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"[^>]*>/g)].map(match => match[1])
if (!scripts.length || !styles.length) throw new Error('Missing built JavaScript or CSS assets')
for (const path of Object.keys(pages)) {
  const file = path === '/' ? 'dist/index.html' : `dist${path}`
  await writeFile(file, render(path, scripts, styles))
}
await writeFile('dist/404.html', render('/404', scripts, styles))
const escapeXml = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;')
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map(path => `  <url><loc>${escapeXml(siteUrl + path)}</loc></url>`).join('\n')}\n</urlset>\n`)
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log(`Prerendered ${Object.keys(pages).length} pages and 404.html for ${siteUrl}`)
