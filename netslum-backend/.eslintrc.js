module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: [
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
    quotes: [
      'warn',
      'single',
    ],
    semi: [
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
    'no-unused-vars': [
      'warn',
      {},
    ],
    'prefer-template': [
      'warn',
    ],
  },
};
