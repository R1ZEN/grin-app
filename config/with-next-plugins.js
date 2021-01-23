const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports.withNextPlugins = (config) => withPlugins([
  [optimizedImages, {

  }],
], config);