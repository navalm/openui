/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev-only feature for highlighting potential problems
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    // Note: This feature is required to use NextJS Image in SSG mode.
    // https://nextjs.org/docs/messages/export-image-api
    unoptimized: true,
  },
}

module.exports = nextConfig
