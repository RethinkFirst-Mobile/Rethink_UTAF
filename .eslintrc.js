module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  extends: [
    'eslint:recommended'
  ],
  globals: {
    // WebdriverIO globals
    $: 'readonly',
    $$: 'readonly',
    browser: 'readonly',
    driver: 'readonly'
  },
  rules: {
    // stylistic rules - adjust as needed
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'eqeqeq': ['error', 'always'],
    'curly': 'error'
  }
};
