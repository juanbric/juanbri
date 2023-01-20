/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  vercel: {
    domain: 'juanbri.dev',
  },
  images: {
      domains: ['images.ctfassets.net'],
  }
}