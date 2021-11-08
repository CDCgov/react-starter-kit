// This file configures ESLint for maintaining code style in your project,
// as well as detecting potential issues. Most IDEs have an extension or
// plugin to support full ESLint integration - linting and fixing
module.exports = {

  env: {
    browser: true,
  },

  extends: [
    // base ESLint rules for React apps
    'react-app',
    // useful ruleset for ensuring accessibility in JSX output
    'plugin:jsx-a11y/recommended',
    // adds checks for import / export syntax in js
    'plugin:import/recommended',
  ],

  plugins: ['jsx-a11y', 'import'],

  parserOptions: {
    es2021: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  // Here is where you can override / customize ESLint rules
  // See here for ESlint Rules: https://eslint.org/docs/rules/
  rules: {
    'import/no-named-as-default': 0,
    'no-labels': 0,
    'no-unused-labels': 0,
    'import/no-anonymous-default-export': 0
  }

};