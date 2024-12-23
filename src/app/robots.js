export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: 'https://nismotronicwiki.app.runonflux.io/sitemap.xml'
  }
}
