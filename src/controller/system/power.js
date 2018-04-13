
const knex = require('../../lib/knex')

module.exports = {

  async find (ctx) {
    const _ = ctx.query
    const rows = await knex.select().from('power').where(JSON.parse(_.whe)).limit(parseInt(_.lim) || 10).offset(parseInt(_.off) || 0)
    const count = await knex.count('* as cnt').from('power').where(JSON.parse(_.whe))
    ctx.body = ctx.succ({rows, count: count[0].cnt})
  },

  async findOne (ctx) {
    const idx = ctx.params
    const rows = await knex.first().from('power').where(idx)
    ctx.body = ctx.succ(rows[0])
  },

  async insert (ctx) {
    let row = ctx.request.body
    row = Object.assign(row, { createdAt: knex.raw('now()'), updatedAt: knex.raw('now()') })
    const result = await knex.insert(row).into('power')
    ctx.body = ctx.succ(result)
  },

  async update (ctx) {
    const idx = ctx.params
    let row = ctx.request.body
    row = Object.assign(row, { updatedAt: knex.raw('now()') })
    console.log(knex('power').where(idx).update(row).toString())
    const result = await knex('power').where(idx).update(row)
    ctx.body = ctx.succ(result)
  },

  async delete (ctx) {
    const idx = ctx.params
    const result = await knex('power').where(idx).delete()
    ctx.body = ctx.succ(result)
  }

}
