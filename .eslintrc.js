const path = require('path');

module.exports = {
  'root': true,
  'extends': [
    path.join(__dirname, 'packages', 'grin-eslint'),
  ],
};