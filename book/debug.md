# 安装

[地址](https://github.com/visionmedia/debug)

```bash
npm install debug
```

# 使用

```bash
DEBUG=* node app.js
DEBUG=http node app.js
DEBUG=worker:* node app.js
DEBUG=worker:a,worker:b node app.js
DEBUG=worker:a node app.js
```

```js
// app.js
var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

debug('booting %o', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function(){
  debug('listening');
});

require('./worker');


// worker.js
var a = require('debug')('worker:a')
  , b = require('debug')('worker:b');

function work() {
  a('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work();

function workb() {
  b('doing some work');
  setTimeout(workb, Math.random() * 2000);
}

workb();
```

| 打印格式 | 描述 |
|-----------|----------------|
| `%O`      | 多行打印 Object |
| `%o`      | 单行打印 Object |
| `%s`      | 字符串 |
| `%d`      | 数字 (包括整数和浮点数). |
| `%j`      | JSON |
| `%%`      | 百分号'%' (没有参数) |