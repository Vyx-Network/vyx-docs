/**
 * Organization Schema for Vyx Network
 * Helps Google understand your business and show rich snippets
 */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vyx Network',
    url: 'https://vyx.network',
    logo: 'https://vyx.network/logo.png',
    description: 'Premium residential proxy network for developers and businesses. 195+ countries, $1.80/GB pricing.',
    foundingDate: '2025',
    sameAs: [
      'https://twitter.com/vyxp2p',
      'https://github.com/vyx-network'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@vyx.network',
      contactType: 'Customer Service',
      availableLanguage: ['English']
    },
    areaServed: {
      '@type': 'GeoShape',
      name: 'Worldwide'
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Residential Proxy Service',
        description: 'High-quality residential proxies for web scraping, ad verification, and data collection'
      },
      price: '1.80',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1.80',
        priceCurrency: 'USD',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '1',
          unitCode: 'GBQ' // Gigabyte
        }
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * FAQ Schema for FAQ sections
 * Helps content appear in "People Also Ask" boxes
 */
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * HowTo Schema for tutorial pages
 * Helps show step-by-step guides in search results
 */
export function HowToSchema({
  name,
  description,
  steps,
  totalTime
}: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; url?: string }>
  totalTime?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime ? { totalTime } : {}),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {})
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Article Schema for blog posts
 * Helps articles show rich snippets with author, date, etc.
 */
export function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url
}: {
  headline: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image: string
  url: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vyx Network',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vyx.network/logo.png'
      }
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: {
      '@type': 'ImageObject',
      url: image
    },
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Product Schema for pricing/product pages
 * Helps show product information in search results
 */
export function ProductSchema({
  name,
  description,
  price,
  priceCurrency = 'USD',
  availability = 'https://schema.org/InStock'
}: {
  name: string
  description: string
  price: string
  priceCurrency?: string
  availability?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'Vyx Network'
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
      availability,
      url: 'https://vyx.network/pricing',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Breadcrumb Schema for navigation
 * Helps show breadcrumb trail in search results
 */
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
