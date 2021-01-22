const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.story.tsx',
  ],
  addons: [],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'public': path.resolve(__dirname, '..', 'public'),
    };

    return config;
  },
};