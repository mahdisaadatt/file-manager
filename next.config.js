/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'file-manager-django.up.railway.app',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
