
```js
const Koa = require('koa')
const app = new Koa()

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// console
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// response
app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.listen(3000)
```

```js
const Koa = require('koa')
const app = new Koa()

const compose = require('koa-compose')

async function random(ctx, next) {
  if ('/random' == ctx.path) {
    ctx.body = Math.floor(Math.random() * 10)
  } else {
    await next()
  }
}

async function backwards(ctx, next) {
  if ('/backwards' == ctx.path) {
    ctx.body = 'sdrawkcab'
  } else {
    await next()
  }
}

async function pi(ctx, next) {
  if ('/pi' == ctx.path) {
    ctx.body = String(Math.PI)
  } else {
    await next()
  }
}

const all = compose([random, backwards, pi])

app.use(all)

app.listen(3000)
```

```js
const Koa = require('koa')
const app = new Koa()

// async
const fs = require('fs-promise')
app.use(async function (ctx, next) {
  const paths = await fs.readdir('docs')
  const files = await Promise.all(paths.map(path => fs.readFile(`docs/${path}`, 'utf8')))

  ctx.type = 'markdown'
  ctx.body = files.join('')
})

app.listen(3000)
```

- 100 “continue”
- 101 “switching protocols”
- 102 “processing”
- 200 “ok”
- 201 “created”
- 202 “accepted”
- 203 “non-authoritative information”
- 204 “no content”
- 205 “reset content”
- 206 “partial content”
- 207 “multi-status”
- 208 “already reported”
- 226 “im used”
- 300 “multiple choices”
- 301 “moved permanently”
- 302 “found”
- 303 “see other”
- 304 “not modified”
- 305 “use proxy”
- 307 “temporary redirect”
- 308 “permanent redirect”
- 400 “bad request”
- 401 “unauthorized”
- 402 “payment required”
- 403 “forbidden”
- 404 “not found”
- 405 “method not allowed”
- 406 “not acceptable”
- 407 “proxy authentication required”
- 408 “request timeout”
- 409 “conflict”
- 410 “gone”
- 411 “length required”
- 412 “precondition failed”
- 413 “payload too large”
- 414 “uri too long”
- 415 “unsupported media type”
- 416 “range not satisfiable”
- 417 “expectation failed”
- 418 “I’m a teapot”
- 422 “unprocessable entity”
- 423 “locked”
- 424 “failed dependency”
- 426 “upgrade required”
- 428 “precondition required”
- 429 “too many requests”
- 431 “request header fields too large”
- 500 “internal server error”
- 501 “not implemented”
- 502 “bad gateway”
- 503 “service unavailable”
- 504 “gateway timeout”
- 505 “http version not supported”
- 506 “variant also negotiates”
- 507 “insufficient storage”
- 508 “loop detected”
- 510 “not extended”
- 511 “network authentication required”

