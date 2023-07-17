/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "TradeCycle",
};

module.exports = nextConfig;
