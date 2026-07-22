/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx'],
  // Force rebuild — clear Vercel cache | Build: 2024-07-22-rebuild
};

module.exports = nextConfig;
