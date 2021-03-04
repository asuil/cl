module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx'] },
    ],
    'react/jsx-curly-newline': [
      0,
    ],
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
  },
};
