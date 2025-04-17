import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        pathname: '**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
