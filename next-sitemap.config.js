/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs.vyx.network',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ['/server-sitemap.xml', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      },
      {
        userAgent: 'GPTBot',
        disallow: '/' // Block OpenAI crawler from training on docs
      },
      {
        userAgent: 'CCBot',
        disallow: '/' // Block Common Crawl
      }
    ],
    additionalSitemaps: [
      'https://docs.vyx.network/server-sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom priority based on page importance
    let priority = 0.7
    let changefreq = 'weekly'

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    }
    // Getting started - critical onboarding page
    else if (path.startsWith('/getting-started')) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Code examples - highly valuable for SEO
    else if (path.startsWith('/examples')) {
      priority = 0.9
      changefreq = 'weekly'
    }
    // Blog posts - fresh content
    else if (path.startsWith('/blog')) {
      priority = 0.8
      changefreq = 'weekly'
    }
    // Geo-targeted and use-case landing pages
    else if (path.startsWith('/proxies/') || path.startsWith('/use-cases/')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Comparison pages
    else if (path.startsWith('/compare/')) {
      priority = 0.8
      changefreq = 'monthly'
    }
    // Configuration and other docs
    else if (path.startsWith('/configuration') || path.startsWith('/proxy-types')) {
      priority = 0.7
      changefreq = 'weekly'
    }
    // Troubleshooting
    else if (path.startsWith('/troubleshooting')) {
      priority = 0.7
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? []
    }
  },
  // Additional config for better crawling
  additionalPaths: async (config) => {
    const result = []

    // Add dynamic blog posts if they exist
    // This will be populated when blog is created

    return result
  }
}
