module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'indent': [
      'warn',
      2,
    ],
    'linebreak-style': [
      'warn',
      'windows',
    ],
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'semi': [
      'error',
      'always',
    ],
    'no-trailing-spaces': [
      'warn',
      {},
    ],
    'no-duplicate-imports': [
      'warn',
      {},
    ],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
  },
};
