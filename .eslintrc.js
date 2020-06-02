module.exports = {
  root: false,
  env: {
    node: false
  },
  'extends': [
    './src'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 'off',
    'no-debugger':  'off'
  }
}
