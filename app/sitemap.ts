import type { MetadataRoute } from 'next'

const baseUrl = 'https://budokarate.or.id'

const routes = [
  '',
  '/about',
  '/about/profile',
  '/black-belts',
  '/contact',
  '/dojo',
  '/news',
  '/programs',
  '/schedule',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
