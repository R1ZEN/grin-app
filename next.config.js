const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants');
const { withNextPlugins } = require('./config/with-next-plugins');

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