/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  output: "export",
  distDir: 'out',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
