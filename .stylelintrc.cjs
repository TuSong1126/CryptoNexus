module.exports = {
  // 从标准配置中继承规则
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order',
    'prettier'
  ],
  plugins: ["stylelint-declaration-block-no-ignored-properties", 'stylelint-prettier'],

  // 自定义规则
  rules: {
    'import-notation': 'string', // 指定导入CSS文件的方式("string"|"url")
    'selector-class-pattern': null, // 选择器类名命名规则
    'custom-property-pattern': null, // 自定义属性命名规则
    'keyframes-name-pattern': null, // 动画帧节点样式命名规则
    'no-descending-specificity': null, // 允许无降序特异性
    'no-empty-source': null, // 允许空样式
    // 允许 global 、export 、deep伪类
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', 'deep']
      }
    ],
    // 允许未知属性
    'property-no-unknown': [
      true,
      {
        ignoreProperties: []
      }
    ],
    // 允许未知规则
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['apply', 'use', 'for']
      }
    ]
  },

  // 忽略检查的文件或文件夹
  ignoreFiles: ['node_modules/**/*', 'build/**/*'],
};
