/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  vercel: {
    domain: 'https://www.juanbri.dev/',
  },
  images: {
      domains: ['images.ctfassets.net'],
  }
}