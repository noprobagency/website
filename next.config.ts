import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'framerusercontent.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    // 301 redirects from legacy English-named IT paths to SEO-optimized Italian slugs
    return [
      { source: '/it/about',                  destination: '/it/chi-siamo',                permanent: true },
      { source: '/it/about/:path*',           destination: '/it/chi-siamo/:path*',         permanent: true },
      { source: '/it/use-cases',              destination: '/it/casi-studio',              permanent: true },
      { source: '/it/use-cases/:path*',       destination: '/it/casi-studio/:path*',       permanent: true },
      { source: '/it/contacts',               destination: '/it/contatti',                 permanent: true },
      { source: '/it/data-driven-team',       destination: '/it/team-ecommerce-dedicato',  permanent: true },
      { source: '/it/data-driven-team/:path*',destination: '/it/team-ecommerce-dedicato/:path*', permanent: true },
      { source: '/it/ecommerce-rebuild',      destination: '/it/rifacimento-ecommerce',    permanent: true },
      { source: '/it/ecommerce-rebuild/:path*',destination: '/it/rifacimento-ecommerce/:path*', permanent: true },
    ]
  },
}

export default nextConfig
