/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/fluxer-verification',
        destination: '/.well-known/fluxer-verification.txt',
      },
    ]
  },
}

module.exports = nextConfig
