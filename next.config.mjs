import nextra from 'nextra'

const withNextra = nextra({
    search: true,
    defaultShowCopyCode: true,
})

export default withNextra({
    // Next.js config
    output: 'standalone',
})
