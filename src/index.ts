/** @format */
const strictEslint = require('./eslint');
const prettier = require('./prettier');

module.exports = {
  prettier,
  eslint: strictEslint,
  default: strictEslint,
};
