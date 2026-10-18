import { useLocation } from 'react-router-dom'
import { pages, siteUrl } from '../seo.js'

export default function Seo() {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '') || '/'
  const page = pages[path]

  if (!page) return <><title>Sidan hittades inte | Supersidan</title><meta name="robots" content="noindex" /></>

  const url = `${siteUrl}${path}`
  return (
    <>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sv_SE" />
      <meta property="og:site_name" content="Supersidan" />
      <meta property="og:title" content={page.title} />
      <meta property="og:description" content={page.description} />
      <meta property="og:url" content={url} />
    </>
  )
}
