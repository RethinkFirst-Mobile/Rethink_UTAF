module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
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
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    // allow gradual migration to TS (suppress explicit any and require warnings temporarily)
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': ['warn', { 'ts-ignore': 'allow-with-description' }],
    'no-console': 'off',
    'eqeqeq': ['error', 'always'],
    'curly': 'error'
  }
};
