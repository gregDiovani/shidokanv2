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
        destination: '/about/erick-danurahardja',
        permanent: true,
      },
      {
        source: '/about/profile',
        destination: '/about/erick-danurahardja',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
