module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
        '*.jsx',
        '*.js',
      ],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  globals: {
    document: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: 0,
    'linebreak-style': 0,
    'no-unused-vars': 'off',
    'arrow-body-style': 0,
  },
};
