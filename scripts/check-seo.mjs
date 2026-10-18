import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const { pages, siteUrl } = await import(pathToFileURL(resolve('node_modules/.cache/supersidan-prerender/entry-server.js')))
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const titles = new Set()
for (const path of Object.keys(pages)) {
  const html = await readFile(path === '/' ? 'dist/index.html' : `dist${path}`, 'utf8')
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] || ''
  const body = html.match(/<body>([\s\S]*?)<\/body>/)?.[1] || ''
  const title = head.match(/<title>(.*?)<\/title>/)?.[1]
  assert(title && !titles.has(title), `${path}: missing or duplicate title`)
  titles.add(title)
  assert.equal((head.match(/<title>/g) || []).length, 1)
  assert.equal((head.match(/name="description"/g) || []).length, 1)
  assert.equal((head.match(/rel="canonical"/g) || []).length, 1)
  assert(head.includes(`rel="canonical" href="${siteUrl}${path}"`), `${path}: canonical`)
  assert.equal((body.match(/<h1[ >]/g) || []).length, 1)
  assert(body.includes('gunnar.tonart@telia.com'), `${path}: rendered contact`)
  assert(!html.includes('Här lägger du') && !html.includes('Här beskriver du'))
  assert(!head.includes('noindex'))
  assert(sitemap.includes(`<loc>${siteUrl}${path}</loc>`))
  for (const asset of html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)) {
    await readFile(`dist${asset[1]}`)
  }
}
const errorPage = await readFile('dist/404.html', 'utf8')
assert(errorPage.includes('name="robots" content="noindex"'))
assert(!errorPage.includes('rel="canonical"'))
assert((await readFile('dist/robots.txt', 'utf8')).includes(`Sitemap: ${siteUrl}/sitemap.xml`))
console.log(`Verified HTML, metadata, assets, sitemap and 404 for ${titles.size} pages.`)
