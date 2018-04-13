
const config = require('../../config')
const jsonwebtoken = require('jsonwebtoken')
// const md5 = require('md5')
const knex = require('../../lib/knex')

module.exports = {

  async login (ctx) {
    const { no, password } = ctx.request.body
    // const { no, password } = ctx.request.query
    const row = await knex.from('user').where({ no }).first()
    if (!row) throw ctx.throw(400, '无此用户名！')
    if (password !== row.password) ctx.throw(400, '密码错误！')
    const token = jsonwebtoken.sign({ data: row }, config.secret, { expiresIn: '1h' })
    ctx.body = ctx.succ({
      user: row,
      token
    })
  },

  async register (ctx) {
    const user = ctx.request.body
    const cnt = await knex.from('user').where({ no: user.no }).count()
    if (cnt > 0) throw ctx.throw(400, '用户名已存在！')
    await knex.insert(user).into('user')
    ctx.body = ctx.succ('注册成功！')
  },

  async navigation (ctx) {
    const rows = await knex.raw(
      'select page.path as path, page.name as name, page.icon as icon, page.father as father ' +
      'from power, page where power.roleCode = ? and power.pagePath = page.path ' +
      'and power.valid = true and page.valid = true ', ctx.params.role || 'guest'
    )
    ctx.body = ctx.succ(rows[0])
  },

  async find (ctx) {
    const _ = ctx.query
    const rows = await knex.select().from('user').where(JSON.parse(_.whe)).limit(parseInt(_.lim) || 10).offset(parseInt(_.off) || 0)
    const count = await knex.count('* as cnt').from('user').where(JSON.parse(_.whe))
    ctx.body = ctx.succ({rows, count: count[0].cnt})
  },

  async findOne (ctx) {
    const idx = ctx.params
    const rows = await knex.first().from('user').where(idx)
    ctx.body = ctx.succ(rows[0])
  },

  async insert (ctx) {
    let row = ctx.request.body
    row = Object.assign(row, { createdAt: knex.raw('now()'), updatedAt: knex.raw('now()') })
    const result = await knex.insert(row).into('user')
    ctx.body = ctx.succ(result)
  },

  async update (ctx) {
    const idx = ctx.params
    let row = ctx.request.body
    row = Object.assign(row, { updatedAt: knex.raw('now()') })
    console.log(knex('user').where(idx).update(row).toString())
    const result = await knex('user').where(idx).update(row)
    ctx.body = ctx.succ(result)
  },

  async delete (ctx) {
    const idx = ctx.params
    const result = await knex('user').where(idx).delete()
    ctx.body = ctx.succ(result)
  }

}
