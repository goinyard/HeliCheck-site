/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during build (treat them as warnings instead)
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['i.imgur.com', 'images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  },
  // Add other configuration options here as needed
}

module.exports = nextConfig 