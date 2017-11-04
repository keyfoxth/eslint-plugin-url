module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },

  plugins: [
    'url'
  ]
}
