// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.66.93.133', 'localhost'],
  output: 'standalone',
  // Disable static generation for pages that use Supabase
  experimental: {
    forceSwcTransforms: true,
  },
}

export default nextConfig