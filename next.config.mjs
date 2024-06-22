/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",
  distDir: 'out',
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

export default nextConfig;