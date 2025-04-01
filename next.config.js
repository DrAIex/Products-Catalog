/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
  transpilePackages: ['@mui/material', '@mui/system', '@mui/icons-material'],
}

module.exports = nextConfig 