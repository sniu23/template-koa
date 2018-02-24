
# 安装

[standard](https://github.com/standard/standard/blob/master/docs/README-zhcn.md)
[snazzy](https://github.com/standard/snazzy)

```bash
npm install --save-dev standard snazzy
```

# 使用

standard: 代码样式规范&自动修正
- 无须配置文件
- 自动代码格式化 standard --fix

**这份规范不隶属于任何官方组织，所以才叫 standard/standard 而不是 ECMA/standard ！**

snazzy: 美化样式的输出内容，带颜色。

```js
// package.json
"scripts": {
    "lint": "standard | snazzy",
    "lint:fix": "standard --fix | snazzy"
},
```

# 样式

- **不再需要分号** 
- **使用两个空格** – 进行缩进
- **字符串使用单引号** – 需要转义的地方除外
- **不允许有冗余的变量** – 这是导致 *大量* bug 的源头!
- **行首不要以 `(`, `[`, or `` ` `` 开头**
  - 这是省略分号时**唯一**会造成问题的地方 – *工具里已加了自动检测！*
- **关键字后加空格** `if (condition) { ... }`
- **函数名后加空格** `function name (arg) { ... }`
- 坚持使用全等 `===` 摒弃 `==` 一但在需要检查 `null || undefined` 时可以使用 `obj == null`。
- 一定要处理 Node.js 中错误回调传递进来的 `err` 参数。
- 使用浏览器全局变量时加上 `window` 前缀 – `document` 和 `navigator` 除外

# 记得给编辑器加一个插件