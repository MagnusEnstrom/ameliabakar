import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME || '',
        port: '',
      },
    ],
  },
  output: 'standalone'
};

export default nextConfig;
