/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['172.16.0.2'],
  async redirects() {
    return [
      {
        source: '/about/shihan',
        destination: '/about/profile',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
