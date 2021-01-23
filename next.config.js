const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const withNextPlugins = (phase, defaultConfig) => withPlugins([
  [optimizedImages, {}],
])(phase, { defaultConfig });

module.exports = (phase, { defaultConfig }) => {

  if ([PHASE_PRODUCTION_SERVER, PHASE_DEVELOPMENT_SERVER].includes(phase)) {
    const config = {
      ...defaultConfig,
      env: {
        IS_SERVER: true
      }
    }

    return withNextPlugins(config);
  }

  return withNextPlugins(defaultConfig);
};