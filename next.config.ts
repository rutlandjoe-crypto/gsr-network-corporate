<<<<<<< HEAD
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
=======
import type { NextConfig } from 'next'
import { withBotId } from 'botid/next/config'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md/,
      type: 'asset/source',
    })
    return config
  },
  turbopack: {
    rules: {
      '*.md': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.com',
        port: '',
        pathname: '/api/www/avatar/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default withBotId(nextConfig)
>>>>>>> 314ea8406b1329c98f685f4e8a78f1f70cc41f47
