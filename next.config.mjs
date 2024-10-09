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
        protocol: "https",
        hostname: "silverbi.s3.ap-southeast-2.amazonaws.com",
        port: "",
        pathname: "/blog/*/*",
      },
      {
        hostname: "avatars.githubsercontent.com",
        protocol: "https",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128],
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
