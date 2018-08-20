module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tab': 'off',
    'eslint-disable-next-line': 'off',
    'space-before-function-paren': 0,
    'semi': 0,
    'no-useless-escape': 0,
    'quotes': 0,
    'indent': 0,
    'no-tabs': 0,
    'no-trailing-spaces': 0,
    'no-mixed-spaces-and-tabs': 0,
    'eqeqeq': 0,
    'no-multiple-empty-lines': 0,
    'no-multi-spaces': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
