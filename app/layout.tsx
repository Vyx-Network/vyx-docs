import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    metadataBase: new URL('https://docs.vyx.network'),
    title: {
        default: 'Vyx Network Documentation - Residential Proxy API Guide',
        template: '%s | Vyx Docs'
    },
    description: 'Complete documentation for Vyx Network residential proxy service. Learn how to integrate proxies in Python, Node.js, and more. 195+ countries, $1.80/GB pricing.',
    keywords: ['residential proxies', 'proxy api', 'proxy documentation', 'vyx network', 'web scraping', 'residential IP', 'proxy integration'],
    authors: [{ name: 'Vyx Network Team' }],
    creator: 'Vyx Network',
    publisher: 'Vyx Network',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.vyx.network',
        siteName: 'Vyx Network Documentation',
        title: 'Vyx Network Documentation - Residential Proxy API Guide',
        description: 'Complete documentation for Vyx residential proxy service. 195+ countries, HTTP/HTTPS/SOCKS5 support, $1.80/GB pricing.',
        images: [
            {
                url: 'https://vyx.network/logo.png',
                width: 1200,
                height: 630,
                alt: 'Vyx Network Documentation'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        site: '@vyxp2p',
        creator: '@vyxp2p',
        title: 'Vyx Network Documentation',
        description: 'Complete documentation for residential proxy service. 195+ countries, $1.80/GB pricing.',
        images: ['https://vyx.network/logo.png']
    },
    alternates: {
        canonical: 'https://docs.vyx.network'
    }
}

const navbar = (
    <Navbar
        logo={<img src="/logo.png" alt="Vyx Network" width={50} height={20}/>}
    />
)
const footer = <Footer>{new Date().getFullYear()} © Vyx Network.</Footer>

export default async function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body>
        <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/Vyx-Network/vyx-docs/tree/main"
            footer={footer}
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}
