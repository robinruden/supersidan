import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'
export { pages, siteUrl } from './seo.js'

// React 19 places titles, metadata and canonical links in the document head.
export function render(path, scripts, styles) {
  return '<!doctype html>' + renderToString(
    <html lang="sv">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {styles.map(href => <link key={href} rel="stylesheet" href={href} />)}
        {scripts.map(src => <script key={src} type="module" src={src} />)}
      </head>
      <body><div id="root"><StaticRouter location={path}><App /></StaticRouter></div></body>
    </html>,
  )
}
