import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'static.luckyscent.com',
      },
      {
        protocol: 'https',
        hostname: 'fimgs.net',
      }
    ],
  },
};

export default nextConfig;
