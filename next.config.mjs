/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.frontendpractice.com',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
