/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.frontendpractice.com',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
