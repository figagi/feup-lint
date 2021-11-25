export default {
  // 必须使用T[]声明数组类型
  '@typescript-eslint/array-type': 'error',
  'no-undef': 0, // 不禁止未声明的变量
  // 不限制 重载成员必须是连续的
  '@typescript-eslint/adjacent-overload-signatures': 0,
  // 不允许无意义的await
  '@typescript-eslint/await-thenable': 1,
  // 不禁止使用带规则名称的注释
  '@typescript-eslint/ban-ts-comment': 0,
  // 不禁止tslint注释
  '@typescript-eslint/ban-tslint-comment': 0,
  // 不限制必须大括号风格
  'brace-style': 'off',
  '@typescript-eslint/brace-style': 0,
  // 不限制 类上面方法名调用风格一致
  '@typescript-eslint/class-literal-property-style': 0,
  // 不允许对象尾部逗号
  'comma-dangle': 'off',
  '@typescript-eslint/comma-dangle': 0,
  // 不强制逗号后空格
  'comma-spacing': 'off',
  '@typescript-eslint/comma-spacing': 0,
  // 强制使用记录类型Record
  '@typescript-eslint/consistent-indexed-object-style': 1,
  // 不强制使用类型断言
  '@typescript-eslint/consistent-type-assertions': 0,
  // 不限制 type和interface声明命名
  '@typescript-eslint/consistent-type-definitions': 0,
  // 强制使用一致的类型导入
  '@typescript-eslint/consistent-type-imports': 1,
  // 不强制将默认参数放在最前面
  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 0,
  // 限制访问对象必须使用.点号
  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': 1,
  // 不限制 需要函数和类方法显式返回类型
  '@typescript-eslint/explicit-function-return-type': 0,
  // 不限制调用方法括号的间隔，允许空格
  'func-call-spacing': 'off',
  '@typescript-eslint/func-call-spacing': 0,
  // 不强制一致缩进
  indent: 'off',
  '@typescript-eslint/indent': 0,
  // 不限制变量非要初始化参数
  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 0,
  // 不限制关键字(try, if)前台使用一致间距
  'keyword-spacing': 'off',
  '@typescript-eslint/keyword-spacing': 0,
  // 不禁止类成员之间必须空行
  'lines-between-class-members': 'off',
  // 接口和类型换行样式 不限制统一，可设置; ,或空
  '@typescript-eslint/lines-between-class-members': 0,
  '@typescript-eslint/member-delimiter-style': 0, // 不限制换行样式
  // 不限制声明字段和使用必须顺序一致
  '@typescript-eslint/member-ordering': 0,
  // 强制使用特定的方法声明语法，声明TS函数类型
  '@typescript-eslint/method-signature-style': 'error',
  // 不限制Array声明构造函数
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 0,
  // 不限制toString使用场景
  '@typescript-eslint/no-base-to-string': 0,
  // 禁止使用空断言! ===语法
  '@typescript-eslint/no-confusing-non-null-assertion': 'error',
  // 不要求 void 类型的表达式出现在语句位置
  '@typescript-eslint/no-confusing-void-expression': 0,
  // 限制成员重复命名
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',
  // 不禁止重复导入
  'no-duplicate-imports': 'off',
  '@typescript-eslint/no-duplicate-imports': 0,
  // 不限制删除运算符
  '@typescript-eslint/no-dynamic-delete': 0,
  // 不限制空函数
  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 0,
  // 禁止声明空接口
  '@typescript-eslint/no-empty-interface': 1,
  // 不限制额外的非空断言
  '@typescript-eslint/no-extra-non-null-assertion': 0,
  // 不限制不必要的括号
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': 0,
  // 不限制不必要的分号
  'no-extra-semi': 'off',
  '@typescript-eslint/no-extra-semi': 0,
  // 不禁止使用类作为命名空间
  '@typescript-eslint/no-extraneous-class': 0,
  // 不强制promise去做catch错误处理
  '@typescript-eslint/no-floating-promises': 0,
  // 禁止使用for in循环数组
  '@typescript-eslint/no-for-in-array': 'error',
  // 不限制catch中error是any类型
  '@typescript-eslint/no-implicit-any-catch': 0,
  // 不限制eval()语法
  'no-implied-eval': 'off',
  '@typescript-eslint/no-implied-eval': 0,
  // 允许对参数、变量和属性进行显式类型声明
  '@typescript-eslint/no-inferrable-types': 0,
  // 禁止 this 关键字在类或类对象之外出现
  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': 'error',
  // 不限制使用void泛型或返回类型之外的类型
  '@typescript-eslint/no-invalid-void-type': 0,
  // 禁止循环中声明函数
  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': 'error',
  // 不限制丢失精度的数字
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': 0,
  // 不限制使用魔术数字
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 0,
  // 强制执行new和constructor时，有效的定义类型
  '@typescript-eslint/no-misused-new': 'error',
  // 不限制promise使用它、判断它的地方使用
  '@typescript-eslint/no-misused-promises': 0,
  // 禁止使用自定义的TS模块和命名空间，应加前缀declare
  '@typescript-eslint/no-namespace': 1,
  // 禁止在可选链表达式后使用非空断言
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  // 禁止在类构造函数中使用参数属性
  '@typescript-eslint/no-parameter-properties': 'error',
  // 禁止变量重新声明
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  // 允许调用require()语法
  '@typescript-eslint/no-require-imports': 0,
  // 不禁止在外部作用域中声明 相同变量名称
  'no-shadow': 'off',
  // 禁止在外部作用域中声明 相同变量名称
  '@typescript-eslint/no-shadow': 'error',
  // 禁止将变量分配给this
  '@typescript-eslint/no-this-alias': 'error',
  // 限制异常抛出内容语法，而非空内容等
  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': 'error',
  // 不限制使用类型别名
  '@typescript-eslint/no-type-alias': 0,
  // 不限制布尔值与其它参数相等比较
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
  // 不限制变量、类型始终为真/假条件
  '@typescript-eslint/no-unnecessary-condition': 0,
  // 不限制命名空间调用自身类型
  '@typescript-eslint/no-unnecessary-qualifier': 0,
  // 不禁止泛型参数的默认参数，与声明时类型一致
  '@typescript-eslint/no-unnecessary-type-arguments': 0,
  // 不限制变量声明时，必声明类型
  '@typescript-eslint/no-unnecessary-type-assertion': 0,
  // 不禁止对泛型类型 不必要的约束
  '@typescript-eslint/no-unnecessary-type-constraint': 0,
  // 允许将any分配给其它变量和属性
  '@typescript-eslint/no-unsafe-assignment': 0,
  // 允许调用任何类型变量为any的值
  '@typescript-eslint/no-unsafe-call': 0,
  // 不禁止any类型访问任何类型的变量
  '@typescript-eslint/no-unsafe-member-access': 0,
  // 允许从函数中返回any类型
  '@typescript-eslint/no-unsafe-return': 0,
  // 禁止未使用的表达式
  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'error',
  // 禁止未使用过的变量
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],
  // 禁止提前使用变量、属性、方法
  'no-use-before-define': 'off',
  // Makes no sense to allow type inferrence for expression parameters, but require typing the response
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, classes: true, variables: true, typedefs: true },
  ],
  // 禁止不必要的构造函数
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  // 不检测as显式类型转换
  '@typescript-eslint/non-nullable-type-assertion-style': 0,
  // 不限制优先使用as const语法
  '@typescript-eslint/prefer-as-const': 0,
  // 不限制enum显式初始化每个成员值
  '@typescript-eslint/prefer-enum-initializers': 0,
  // 不限制使用for of语法
  '@typescript-eslint/prefer-for-of': 0,
  // 不限制只使用函数类型声明，接口类型声明也可以
  '@typescript-eslint/prefer-function-type': 0,
  // 不强制includes方法优于indexOf方法
  '@typescript-eslint/prefer-includes': 0,
  // 不限制所有枚举成员都是文字值
  '@typescript-eslint/prefer-literal-enum-member': 0,
  // 不强制使用namespace关键字，而不是module关键字
  '@typescript-eslint/prefer-namespace-keyword': 0,
  // 不强制使用空合并运算符
  '@typescript-eslint/prefer-nullish-coalescing': 0,
  // 不强制使用可选链表达式，链式逻辑与也可以
  '@typescript-eslint/prefer-optional-chain': 0,
  // 不要求将私有成员标记为readonly在构造函数
  '@typescript-eslint/prefer-readonly': 0,
  // 不要求将函数中的参数标记为只读的
  '@typescript-eslint/prefer-readonly-parameter-types': 0,
  // 不限制优先使用类型参数Array#reduce而不是强制转换
  '@typescript-eslint/prefer-reduce-type-parameter': 0,
  // 不强制正则以一致的方式使用，应用于字符串
  '@typescript-eslint/prefer-regexp-exec': 0,
  // 不强制使用字符串方法时，使用startsWith和endsWith替换其它用法
  '@typescript-eslint/prefer-string-starts-ends-with': 0,
  // 关闭@ts-ignore语法
  '@typescript-eslint/prefer-ts-expect-error': 0,
  // 不强制 需要返回promise的函数方法被标记为async
  '@typescript-eslint/promise-function-async': 0,
  // 不强制一致性使用引号（单/双引号）
  quotes: 'off',
  '@typescript-eslint/quotes': 0,
  // 不限制Array.sort调用始终提供compare参方法
  '@typescript-eslint/require-array-sort-compare': 0,
  // 不禁止使用不带 await 表达式的 async 函数
  'require-await': 'off',
  '@typescript-eslint/require-await': 0,
  // 不限制添加2个变量时，操作数必须都是数字或字符串类型
  '@typescript-eslint/restrict-plus-operands': 0,
  // 不强制字符串模板里面内容，必须是字符串类型
  '@typescript-eslint/restrict-template-expressions': 0,
  // 不禁止不必要的return await
  'no-return-await': 'off',
  '@typescript-eslint/return-await': 0,
  // 不要求使用分号在结尾处
  semi: 'off',
  '@typescript-eslint/semi': 0,
  // 不要求禁止在函数括号前有空格
  'space-before-function-paren': 'off',
  '@typescript-eslint/space-before-function-paren': 0,
  // 不要求中缀操作符周围有空格
  'space-infix-ops': 'off',
  '@typescript-eslint/space-infix-ops': 0,
  // 不限制布尔表达式中允许的类型
  '@typescript-eslint/strict-boolean-expressions': 0,
  // 使用联合类型对switch进行枚举检查
  '@typescript-eslint/switch-exhaustiveness-check': 'error',
  // 不让使用设置三斜杠指令与 ES6 样式导入声明的优先级
  '@typescript-eslint/triple-slash-reference': 'error',
  // 需要在类型注释周围保持一致的间距
  '@typescript-eslint/type-annotation-spacing': 'error',
  // 需要存在类型注释
  '@typescript-eslint/typedef': 'error',
  // 不强制使用超预期范围的方法，如在类某方法中调用this（全局）
  '@typescript-eslint/unbound-method': 0,
  // 禁止通过使用重载方法，重置函数的传入参数类型
  '@typescript-eslint/unified-signatures': 'error',
  // 不强制使用骆驼拼写法
  camelcase: 0,
  '@typescript-eslint/camelcase': 0,
  // 不禁止使用 require 语句
  '@typescript-eslint/no-var-requires': 0,
  // Common abbreviations are known and readable
  // 不限制在类属性和方法上使用显式可访问性修饰符
  '@typescript-eslint/explicit-member-accessibility': 0,
  // 不限制interface声明的类型，必须以I为前缀
  '@typescript-eslint/interface-name-prefix': 0,
  // 不禁止使用!后缀运算符进行非空断言
  '@typescript-eslint/no-non-null-assertion': 0,
  // 不禁止使用any类型
  '@typescript-eslint/no-explicit-any': 0,
  // 禁止使用特定类型，如内置的别名
  '@typescript-eslint/ban-types': 1,
  // 不强制要求导出函数和类中方法，必须显式声明返回类型
  '@typescript-eslint/explicit-module-boundary-types': 0,
  // 不对整体项目 强制性命名约定统一风格
  '@typescript-eslint/naming-convention': 0,
};
