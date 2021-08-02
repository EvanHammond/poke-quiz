module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    fetch: true,
    __DEV__: true,
  },
  plugins: ['import', '@typescript-eslint', 'react', 'jest'],
  extends: [
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-empty-function': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx', 'test/**/*'],
      env: {
        'jest/globals': true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'jest/no-identical-title': 'off',
      },
    },
  ],
};
