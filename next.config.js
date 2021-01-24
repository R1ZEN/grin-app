const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const projectionSymlinks = require('./packages/grin-next-pugins/projection-symlinks');

module.exports = (phase, { defaultConfig }) => {
  const config = { ...defaultConfig };

  if ([PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER].includes(phase)) {
    config.env = {
      ...config.env,
      IS_SERVER: true,
    };
  }

  return withPlugins([
    projectionSymlinks,
    optimizedImages,
  ])(phase, { defaultConfig: config });
};
