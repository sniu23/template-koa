# JWT

>Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。

## session认证的缺陷：session需要保存在服务器端
- 随着认证用户的增多，给服务端带来很大的开销
- 不利于分布式服务应用

## 基于token的鉴权流程：
1. 用户使用用户名密码来请求服务器
2. 服务器进行验证用户的信息
3. 服务器通过验证发送给用户一个token
4. 客户端存储token，并在每次请求时附送上这个token值
5. 服务端验证token值，并返回数据

## 基于token认证的特点：
- 类似于http协议也是无状态的，不需要在服务端去保留用户的认证信息或者会话信息。
- 服务端要支持`CORS(跨来源资源共享)`策略，一般在服务端做`Access-Control-Allow-Origin: *`。

## JWT的构成：

JWT是由三段信息构成的，这三段信息文本用`.`链接一起就构成了Jwt字符串。

- 头部（header)
- 载荷（payload)
- 签证（signature)

1. header:

```js
{
  'typ': 'JWT',  // 声明类型
  'alg': 'HS256' // 声明加密的算法，通常使用 HMAC SHA256
}
```

2. playload:

- 标准中注册的声明 (建议但不强制使用)
  - ss: jwt签发者
  - sub: jwt所面向的用户
  - aud: 接收jwt的一方
  - exp: jwt的过期时间，这个过期时间必须要大于签发时间
  - nbf: 定义在什么时间之前，该jwt都是不可用的.
  - iat: jwt的签发时间
  - jti: jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击
- 公共/私有的声明 (一般添加用户的相关信息或其他业务需要的必要信息)

```js
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

**注意： playload不可以放敏感信息，因为base64对称加密可以被解密。**

3. signature:

```js
// base64加密后的header和base64加密后的payload
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
// 通过header中声明的加密方式进行加盐secret组合加密
var signature = HMACSHA256(encodedString, 'secret'); 
// encodedString + '.' + signature 构成 token
```

**注意： secret只能服务器端知道：jwt的签发生成、验证都是在服务器端，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。**

## 应用：

```js
// 一般是在请求头里加入Authorization，并加上Bearer标注
fetch('api/user/1', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
})
```

## JWT 的特点：

- 因为json的通用性，所以JWT是可以进行跨语言支持的
- 便于传输，jwt的构成非常简单，字节占用很小
- 它不需要在服务端保存会话信息, 所以它易于应用的扩展

## 安全：

- 不应该在 payload 部分存放敏感信息
- 保护好 secret 私钥
- 如果可以，请使用https协议