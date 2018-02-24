# koa-jwt

> koa-jwt：koa中间件，用于 `鉴定authenticate` HTTP请求中的JWT。

[地址](https://github.com/koajs/jwt)

```bash
npm install koa-jwt
```

- token 验证结果什么样？
  1. 如果验证可用，将返回 `ctx.state.user`
    - 可以通过指定 `opt.key='jwtdata'`更名（解密数据将放在`ctx.state.jwtdata`，而不是`ctx.state.user`中）
  2. 如果验证失败，将返回 `401`错误
    - 如果不想报错，只是交给后续中间件去判断 `ctx.state.user`是否存在，可以指定 `opt.passthrough` 为 true
- token 在哪里找？
  1. `opts.getToken` 指定函数
  2. `opts.cookie` 指定 cookie 名字
  3. HTTP头：`Authorization` 字段
- token 密钥在哪里指定？
  1. 在靠前的其他中间件内指定`ctx.state.secret`
  2. `opts.secret`
- 如何检查 token 是否已撤销？
  1. `opts.isRevoked` 指定函数
- 还可以做什么？
  1. 指定 `audience`、`issuer`
  2. 支持非对称加密……

```js
var Koa = require('koa');
var jwt = require('koa-jwt');

var app = new Koa();

// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next){
  return next().catch((err) => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    } else {
      throw err;
    }
  });
});

// Unprotected middleware
app.use(function(ctx, next){
  if (ctx.url.match(/^\/public/)) {
    ctx.body = 'unprotected\n';
  } else {
    return next();
  }
});

// Middleware below this line is only reached if JWT token is valid
app.use(jwt({ secret: 'shared-secret' }));

// Protected middleware
app.use(function(ctx){
  if (ctx.url.match(/^\/api/)) {
    ctx.body = 'protected\n';
  }
});

app.listen(3000);
```

# jsonwebtoken

> jsonwebtoken：做 koa-jwt 没有做的，JWT 的`签发sign`、`校验签名verify`、`解密decode`。

[地址](https://github.com/auth0/node-jsonwebtoken)

```bash
npm install koa-jwt
```

jwt.sign(payload, secretOrPrivateKey, [options, callback])
- options:
  - algorithm: 算法 (default: HS256)
  - expiresIn: Eg: 60, "2 days", "10h", "7d"
  - notBefore: Eg: 60, "2 days", "10h", "7d"
  - audience
  - issuer
  - jwtid
  - subject
  - noTimestamp
  - header
  - keyid

jwt.verify(token, secretOrPublicKey, [options, callback])
- 校验签名成功+可选的expiration, audience, or issuer等成功后，返回解密后的payload.

jwt.decode(token [, options])
- 返回解密后的payload (未校验签名！).

```js
jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: '1h' });

// verify issuer
var cert = fs.readFileSync('public.pem');  // get public key
jwt.verify(token, cert, { audience: 'urn:foo', issuer: 'urn:issuer' }, function(err, decoded) {
  // if issuer mismatch, err == invalid issuer
});


```