import { Metadata } from 'next'

interface MetadataParams {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  authors?: string[]
}

export function generateMetadata({
  title,
  description,
  path,
  keywords,
  image,
  type = 'website',
  publishedTime,
  authors
}: MetadataParams): Metadata {
  const baseUrl = 'https://docs.vyx.network'
  const fullUrl = `${baseUrl}${path}`
  const ogImage = image || `${baseUrl}/logo.png`

  // Ensure description is between 145-160 characters for optimal SEO
  const metaDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description

  return {
    title: `${title} | Vyx Network Documentation`,
    description: metaDescription,
    keywords: keywords || [
      'residential proxies',
      'proxy api',
      'web scraping',
      'proxy documentation',
      'vyx network'
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl
    },
    openGraph: {
      title: title,
      description: metaDescription,
      url: fullUrl,
      siteName: 'Vyx Network Documentation',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'en_US',
      type: type,
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && authors ? { authors } : {})
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: metaDescription,
      images: [ogImage],
      creator: '@vyxp2p',
      site: '@vyxp2p'
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    authors: authors ? authors.map(name => ({ name })) : [{ name: 'Vyx Network Team' }],
    creator: 'Vyx Network',
    publisher: 'Vyx Network',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    }
  }
}

// Page-specific metadata configurations
export const pageMetadata = {
  home: {
    title: 'Vyx Network Documentation - Residential Proxy API Guide',
    description: 'Complete documentation for Vyx Network residential proxy service. Learn how to integrate proxies in Python, Node.js, and more. 195+ countries, $1.80/GB pricing.',
    path: '/',
    keywords: [
      'residential proxy documentation',
      'proxy api guide',
      'vyx network docs',
      'residential proxy api',
      'proxy integration guide',
      'web scraping proxies'
    ]
  },
  gettingStarted: {
    title: 'Getting Started with Vyx Proxies - Quick Setup Guide',
    description: 'Get started with Vyx residential proxies in minutes. Step-by-step guide with Python, Node.js, and cURL examples. Free 1GB trial available.',
    path: '/getting-started',
    keywords: [
      'proxy setup guide',
      'residential proxy tutorial',
      'vyx quickstart',
      'proxy integration',
      'how to use residential proxies'
    ]
  },
  configuration: {
    title: 'Proxy Configuration Guide - Authentication & Settings',
    description: 'Configure Vyx residential proxies with custom settings. Learn about authentication, session management, country targeting, and advanced options.',
    path: '/configuration',
    keywords: [
      'proxy configuration',
      'proxy authentication',
      'proxy settings',
      'residential proxy setup',
      'proxy customization'
    ]
  },
  proxyTypes: {
    title: 'Proxy Types Explained - HTTP, HTTPS, SOCKS5 Protocols',
    description: 'Understand different proxy types and protocols. Compare HTTP, HTTPS, and SOCKS5 proxies. Learn which protocol is best for your use case.',
    path: '/proxy-types',
    keywords: [
      'proxy types',
      'http vs https proxy',
      'socks5 proxy',
      'proxy protocols',
      'residential proxy types'
    ]
  },
  examples: {
    title: 'Proxy Code Examples - Python, Node.js, cURL, Scrapy',
    description: 'Working code examples for Vyx proxies. Integrate with Python Requests, Scrapy, Puppeteer, Playwright, Selenium, and more. Copy-paste ready.',
    path: '/examples',
    keywords: [
      'proxy code examples',
      'python proxy example',
      'nodejs proxy',
      'scrapy proxy integration',
      'puppeteer proxy'
    ]
  },
  troubleshooting: {
    title: 'Troubleshooting Proxy Issues - Common Problems & Solutions',
    description: 'Solve common proxy issues. Fix connection errors, authentication problems, timeout issues, and blocked requests. Quick troubleshooting guide.',
    path: '/troubleshooting',
    keywords: [
      'proxy troubleshooting',
      'proxy errors',
      'proxy connection issues',
      'fix proxy problems',
      'proxy debugging'
    ]
  }
}
