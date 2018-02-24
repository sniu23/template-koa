# 安装

[地址](https://github.com/motdotla/dotenv)

```bash
npm install dotenv --save
```

# 使用

Dotenv： 从 `.env` 文件中加载环境变量到 nodejs 的 `process.env` 中

```js
// 根目录下 .env 文件
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3

// 使用
require('dotenv').config()
// require('dotenv').config({path: '/full/custom/path/to/your/env/vars'})  // 变量自定义路径
const db = require('db')
db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})
```

| 格式 | 解释 |
|------------|----------------|
|单引号：`BASIC=basic`  | `{BASIC: 'basic'}` |
|空值  `EMPTY=`         | `{EMPTY: ''}` |
|双引号：`SINGLE_QUOTE='quoted'` | `{SINGLE_QUOTE: "quoted"}` |
|空行      | 跳过 |
|`#`开头行 | 注释 |
|多行：`MULTILINE="new\nline"`   | 会换行 |
