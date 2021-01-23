const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.story.tsx',
  ],
  addons: [],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@static': path.resolve(__dirname, '..', 'public'),
      '@modules': path.resolve(__dirname, '..', 'src', 'modules')
    };

    return config;
  },
};