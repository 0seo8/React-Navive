module.exports = {
  plugins: [
    'react',
    'react-hooks',
    'import',
    'eslint-plugin-simple-import-sort',
    'unused-imports',
    'prettier',
  ],
  extends: [
    'plugin:react/recommended',
    '@react-native-community',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'unused-imports/no-unused-imports-ts': ['error'],
  },
  overrides: [
    {
      files: '**/*.+(ts|tsx)',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        '@typescript-eslint/quotes': [
          2,
          'backtick',
          {
            avoidEscape: true,
          },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        'import/no-extraneous-dependencies': 'error',
        'unused-imports/no-unused-imports-ts': ['error'],
      },
    },
  ],
};
