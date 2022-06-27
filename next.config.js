/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV,
  assetPrefix: process.env.NODE_ENV
}

module.exports = nextConfig
