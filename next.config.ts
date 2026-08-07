import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  iamges:{
    remotePatterns:[{
      protocol: 'https',
      hostname: 'cdn.sanity.io',
    }]
  }
};

export default nextConfig;
