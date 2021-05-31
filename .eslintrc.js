module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
    'react-app',
    'react-app/jest',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {endOfLine: 'auto',}, // blank on purpose in order to remove configurations
      {
        usePrettierrc: true,
        withNodeModules: false,
      },
    ],
  },
}
