/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  vercel: {
    domain: 'https://www.juanbri.com/',
  },
  images: {
      domains: ['images.ctfassets.net'],
  }
}