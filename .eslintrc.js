module.exports = {
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    'no-console': 'off',
    'import/newline-after-import': 'off',
    'import/on-dynamic-require': 'off',
    'no-unused-vars': 0,
    'max-len': 0,
    'linebreak-style': 0,
    'comma-dangle': 0,
    'arrow-body-style': 0,
    'object-curly-newline': 0,
    camelcase: 0,
    'consistent-return': 0,
    'no-trailing-spaces': 0,
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'no-unreachable': 0,
    'import/prefer-default-export': 0,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
  },
};