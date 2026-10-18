// Set VITE_SITE_URL to the final public origin before publishing.
export const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://supersidan.se').replace(/\/$/, '')

export const pages = {
  '/': {
    title: 'Gunnar Persson – körmusik, trolleri & Kalasorkestern',
    description: 'Gunnar Perssons Supersida: körmusik och noter, trolleri med Den Magiske Super-G och musik med Kalasorkestern. Kontakt för information och bokning.',
  },
  '/k-rmusik.html': {
    title: 'Körmusik och noter av Gunnar Persson | Supersidan',
    description: 'Körmusik för blandad kör av Gunnar Persson. Kontakta Gunnar för information om noter och utgivna körhäften.',
  },
  '/den-magiske-super-g.html': {
    title: 'Den Magiske Super-G – trolleri för barn och vuxna',
    description: 'Trolleri med Gunnar Persson, Den Magiske Super-G. Läs om föreställningar för barn och vuxna och kontakta Gunnar för bokning.',
  },
  '/kalasorkestern.html': {
    title: 'Kalasorkestern – musik till festen | Supersidan',
    description: 'Kalasorkestern spelar på fester och tillställningar. Här hittar du kontaktuppgifter för information och bokning.',
  },
  '/pianoflytt.html': {
    title: 'Super-G Pianoflytt – verksamheten har upphört',
    description: 'Super-G Pianoflytt har upphört. Här finns information och kontaktuppgifter till Gunnar Persson.',
  },
}
