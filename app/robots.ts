// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ["/api/", "/_next/", "/admin/"],
    },
    sitemap: 'https://www.amerandtasheel.com/sitemap.xml', // Make sure this matches your actual sitemap URL
  }
}
