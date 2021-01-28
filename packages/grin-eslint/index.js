module.exports = {
  'root': true,
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint',
    'editorconfig',
    'import',
    'react',
  ],
  'extends': [
    'eslint:recommended',
  ],
  'env': {
    'browser': true,
    'node': true,
  },
  'rules': {
    // Core
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    quotes: ['warn', 'single'],
    semi: 'warn',

    // Typescript (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
    '@typescript-eslint/no-inferrable-types': 'warn',

    // Import (https://github.com/benmosher/eslint-plugin-import)
    'import/no-unassigned-import': 'warn',
    'import/newline-after-import': ['warn', { 'count': 1 }],
    'import/no-duplicates': 'warn',

    // React (https://github.com/yannickcr/eslint-plugin-react)
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
    'react/jsx-first-prop-new-line': 'warn',
    'react/jsx-max-props-per-line': ['warn', { 'when': 'always' }],
    'react/jsx-newline': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-closing-bracket-location': ['warn', { location: 'tag-aligned' }],
    'react/jsx-wrap-multilines': ['warn', {
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      prop: 'parens-new-line',
      logical: 'parens-new-line',
      declaration: 'parens-new-line',
    }],
    'react/jsx-no-useless-fragment': 'warn',
  },
};