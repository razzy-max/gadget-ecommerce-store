/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.ibb.co','lh3.googleusercontent.com','res.cloudinary.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@assets'] = path.join(__dirname, 'public/assets');
    return config;
  }
}

module.exports = nextConfig
