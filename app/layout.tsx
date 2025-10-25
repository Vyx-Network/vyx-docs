import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    title: 'Vyx Network Documentation',
    description: 'Complete documentation for Vyx Network residential proxy service'
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
