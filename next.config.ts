/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  allowedDevOrigins: ['192.168.1.197'],
};

module.exports = nextConfig;