/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'realestate-manager.iran.liara.run',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
