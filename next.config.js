const withNextIntl = require('next-intl/plugin')();
 
module.exports = withNextIntl({
  images: {
    domains: ['res.cloudinary.com'],
    // domains: ["localhost"], // Add other domains if needed
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.fallback = { fs: false };

    return config;
  },
});