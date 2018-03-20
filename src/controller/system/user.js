
require('dotenv').config()
const config = require('../../config')
const jsonwebtoken = require('jsonwebtoken')
const md5 = require('md5')
const knex = require('../../lib/knex')

module.exports = {

  async login (ctx) {
    const { no, password } = ctx.request.body
    const row = await knex('User').where({ no }).first()
    if (row) throw ctx.throw(401, '无此用户名！')
    if (row.password !== md5(password)) ctx.throw(401, '密码错误！')
    // JWT 签名
    jsonwebtoken.sign({ data: row }, config.secret, { expiresIn: '1h' })
    ctx.body = ctx.succ('登录成功！')
  },

  async register (ctx) {
    const user = ctx.request.body
    const cnt = await knex('User').where({ no: user.no }).count()
    if (cnt > 0) throw ctx.throw(400, '用户名已存在！')
    await knex.insert(user).into('user')
    ctx.body = ctx.succ('注册成功！')
  }

}
