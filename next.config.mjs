/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  experimental: {
    optimizePackageImports: ["react-icons", "react-pdf"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'silverbi.s3.ap-southeast-2.amazonaws.com',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
