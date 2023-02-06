/* eslint-env node */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/multi-word-component-names': 0,
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-spacing': ['error', { before: false, after: true }],
  },
}
