import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Ensures compatibility with Vercel
  reactStrictMode: true, // Optional, enables strict mode for React
  // Add other configurations if needed
};

export default nextConfig;
