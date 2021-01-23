module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
    'prettier',
  ],
  'extends': [
    'eslint:recommended',
  ],
  'env': {
    'browser': true,
    'node': true,
  },
  'rules': {
    'no-console': 'warn',
    'no-debugger': 'error',
  },
};