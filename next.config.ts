// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.66.93.133', 'localhost'],
  output: 'standalone',
}

export default nextConfig