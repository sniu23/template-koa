# 安装

[地址](https://github.com/alexmingoia/koa-router)

```bash
npm install koa-router
```

## 1. 基本用法

```js
var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

// router.get|put|post|patch|delete|del ⇒ Router
router.get('/', (ctx, next) => {
  // ctx.router available
});

app
  .use(router.routes()) 
  .use(router.allowedMethods());
```

## 2. URL参数

```js
router.get('/:category/:title', (ctx, next) => {
  console.log(ctx.params);
  // => { category: 'programming', title: 'how-to-node' }
});
```

## 3. 命名路由

```js
router.get('user', '/users/:id', (ctx, next) => {
 // ...
});

router.url('user', 3);
// => "/users/3"
```

## 4. 中间件

```js
router.get(
  '/users/:id',
  (ctx, next) => {
    return User.findOne(ctx.params.id).then(function(user) {
      ctx.user = user;
      next();
    });
  },
  ctx => {
    console.log(ctx.user);
    // => { id: 17, name: "Alex" }
  }
);
```

```js
// session middleware will run before authorize
router
  .use(session())
  .use(authorize());

// use middleware only with given path
router.use('/users', userAuth());

// or with an array of paths
router.use(['/users', '/admin'], userAuth());

app.use(router.routes());
```

```js
// router.param Useful for auto-loading or validation. WTF？!
router
  .param('user', (id, ctx, next) => {
    ctx.user = users[id];
    if (!ctx.user) return ctx.status = 404;
    return next();
  })
  .get('/users/:user', ctx => {
    ctx.body = ctx.user;
  })
  .get('/users/:user/friends', ctx => {
    return ctx.user.getFriends().then(function(friends) {
      ctx.body = friends;
    });
  })
  // /users/3 => {"id": 3, "name": "Alex"}
  // /users/3/friends => [{"id": 4, "name": "TJ"}]
```

## 5. 路由嵌套

```js
var forums = new Router();
var posts = new Router();

posts.get('/', (ctx, next) => {...});
posts.get('/:pid', (ctx, next) => {...});
forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());

// responds to "/forums/123/posts" and "/forums/123/posts/123"
app.use(forums.routes());
```

## 6. 路由前缀

```js
var router = new Router({
  prefix: '/users'
});

router.get('/', ...); // responds to "/users"
router.get('/:id', ...); // responds to "/users/:id"
```

## 7. 路由重定向

```js
router.redirect('/login', 'sign-in');
// ctx.redirect('/sign-in');
// ctx.status = 301;
```

## 8. 路由解析

```js
router.get('user', '/users/:id', (ctx, next) => {
  // ...
});

router.url('user', 3);
// => "/users/3"

router.url('user', { id: 3 });
// => "/users/3"

router.use((ctx, next) => {
  // redirect to named route
  ctx.redirect(ctx.router.url('sign-in'));
})

router.url('user', { id: 3 }, { query: { limit: 1 } });
// => "/users/3?limit=1"

router.url('user', { id: 3 }, { query: "limit=1" });
// => "/users/3?limit=1"
```

