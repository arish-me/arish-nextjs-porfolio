import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        pathname: '**', // Allow all paths under this hostname
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '**', // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
