const developmentConfig = require('./next.config.development');
const productionConfig = require('./next.config.production');

/** @type {import('next').NextConfig} */
const nextConfig = process.env.NODE_ENV === 'production' 
  ? productionConfig 
  : developmentConfig;

module.exports = nextConfig; 