import type { NextConfig } from 'next';
import pkg from './package.json' with { type: 'json' };

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR ?? '.next',
  poweredByHeader: false,
  transpilePackages: ['@jobbank/shared'],
  env: { APP_VERSION: pkg.version },
};

export default nextConfig;
