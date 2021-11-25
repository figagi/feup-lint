# fig-lint

lint 规范集合配置文件

`.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('feup-lint/dist/eslint')],

  rules: {
    // your rules
  },
};
```

`.prettierrc.js`

```js
const figLint = require('feup-lint');

module.exports = {
  ...figLint.prettier,
};
```
