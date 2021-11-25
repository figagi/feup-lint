import * as path from 'path';
import * as fs from 'fs';
import tsEslintConfig from './tsEslintConfig';

const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  babelOptions: {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  },
  requireConfigFile: false,
  project: './tsconfig.json',
};

const isJsMoreTs = async (path = 'src') => {
  const fg = require('fast-glob');
  const jsFiles = await fg(`${path}/src/**/*.{js,jsx}`, { deep: 3 });
  const tsFiles = await fg(`${path}/src/**/*.{ts,tsx}`, { deep: 3 });
  return jsFiles.length > tsFiles.length;
};

const isTsProject = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'));

if (isTsProject) {
  try {
    isJsMoreTs(process.cwd()).then((jsMoreTs) => {
      if (!jsMoreTs) return;
      console.log('这是一个 TypeScript 项目，如果不是请删除 tsconfig.json');
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  extends: ['eslint-config-airbnb-base', 'prettier'].concat(
    isTsProject ? ['plugin:@typescript-eslint/recommended'] : ['plugin:react/recommended'],
  ),
  parser: isTsProject ? '@typescript-eslint/parser' : '@babel/eslint-parser',
  plugins: ['eslint-comments', 'react', 'jest', 'unicorn', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  // 0=关闭，1=警告，2=错误
  rules: {
    'react/display-name': 0,
    // 允许解构props参数给 jsx组件使用
    'no-unused-vars': 0,
    // 允许解构props参数给 jsx组件使用
    'react/jsx-props-no-spreading': 0,
    // 允许不可初始化state参数
    'react/state-in-constructor': 0,
    // 不强制约束组件声明方法的方式
    'react/static-property-placement': 0,
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    // 不强制使用 props、state 和 context 时解构赋值
    'react/destructuring-assignment': 'off',
    // 允许jsx tsx互相引用
    'react/jsx-filename-extension': 'off',
    // 不允许组件中用索引当key
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks deps of Hooks
    // 不强制组件必须定义defaultProps参数
    'react/require-default-props': 0,
    // 不强制空组件定义方式，<></>
    'react/jsx-fragments': 0,
    // 不强制返回的组件，必须有括号包裹
    'react/jsx-wrap-multilines': 0,
    // 禁用createClass.propTypes验证规则
    'react/prop-types': 0,
    'react/forbid-prop-types': 0, // 全局禁用
    // 不强制组件方法顺序，如生命周期
    'react/sort-comp': 0,
    // 不强制函数返回<div></div>等组件时，必须引入react
    'react/react-in-jsx-scope': 0,
    // 不强制每一行都是独立的jsx元素
    'react/jsx-one-expression-per-line': 0,
    // 不强制generator 函数中 * 号周围有空格
    'generator-star-spacing': 0,
    // 不强制在函数括号内使用一致的换行
    'function-paren-newline': 0,
    // 不强制导入模块时，必须解构出来的参数
    'import/no-unresolved': 0,
    // 不强制node_modules模块必须在 本地模块之前导入
    'import/order': 0,
    // 不强制default默认导出
    'import/no-named-as-default': 0,
    // 允许循环依赖关系
    'import/no-cycle': 0,
    // 只有一个导出时，不强制设置成默认导出
    'import/prefer-default-export': 0,
    // 不禁止默认导出
    'import/no-default-export': 0,
    // 不禁止使用无关的包
    'import/no-extraneous-dependencies': 0,
    // 验证导入名称，是否是模块中导出的名称
    'import/named': 0,
    // 不验证默认导出名称，必须和引入模块名称一致
    'import/no-named-as-default-member': 0,
    // 禁止重复导入
    'import/no-duplicates': 1,
    // 禁止模块导入自己
    'import/no-self-import': 2,
    // 不限制 确保在导入路径中使用一致文件扩展名
    'import/extensions': 0,
    // 不限制 import 和 require 语句中出现不必要的路径段
    'import/no-useless-path-segments': 0,
    // 不限制 声明的元素必须有交互式的作用
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    // 不限制 带有单击处理可见的非交互式元素必须至少具有一个键盘侦听器
    'jsx-a11y/click-events-have-key-events': 0,
    // 不限制 静态HTML元素标签语义化，必须带有role
    'jsx-a11y/no-static-element-interactions': 0,
    // 不限制a标签的href必须带参数
    'jsx-a11y/anchor-is-valid': 0,
    // 不限制import 排序
    'sort-imports': 0,
    // 不强制使用类方法上this
    'class-methods-use-this': 0,
    'no-confusing-arrow': 0,
    // 不强制使用一致的换行符风格
    'linebreak-style': 0,
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    // 不禁止直接使用 Object.prototypes 的内置属性
    'no-prototype-builtins': 'off',
    // 不限制 如果模块中只有一个导出，则最好使用默认导出而不是命名导出
    'unicorn/prevent-abbreviations': 'off',
    // Conflict with prettier
    'arrow-body-style': 0, // 不限制箭头函数主体是否必须花括号
    'arrow-parens': 0, // 不限制箭头函数参数中需要括号
    'object-curly-newline': 0, // 不限制 大括号内强制执行一致的换行符
    'implicit-arrow-linebreak': 0, // 不限制 隐式箭头必须换行符
    'operator-linebreak': 0, // 不限制使用一致的换行样式
    // 不禁止eslint-disable不带规则名称的注释
    'eslint-comments/no-unlimited-disable': 0,
    'no-param-reassign': 2, // 禁止重新设置 函数形参
    'space-before-function-paren': 0, // 不禁止括号前有空格
    'react/self-closing-comp': 1, // 禁止没有子组件的额外结束标签
    ...(isTsProject ? tsEslintConfig : {}),
  },
  settings: {
    // support import modules from TypeScript files in JavaScript files
    'import/resolver': {
      node: {
        extensions: isTsProject ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] : ['.js', '.jsx'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    polyfills: ['fetch', 'Promise', 'URL', 'object-assign'],
  },
  parserOptions,
};
