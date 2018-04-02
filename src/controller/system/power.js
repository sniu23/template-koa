
const knex = require('../../lib/knex')

module.exports = {

  async find (ctx) {
    const _ = ctx.query
    const rows = await knex.select(_.sel || '*').from('Power').where(_.whe || null).limit(_.lim || 10).offset(_.off || 0)
    const count = await knex.count(_.sel || '*').from('Power').where(_.whe || null)
    ctx.body = ctx.succ({rows, count})
  },

  async findOne (ctx) {
    const idx = ctx.params
    const rows = await knex.first(_.sel || '*').from('Power').where(idx)
    ctx.body = ctx.succ(rows[0])
  },

  async insert (ctx) {
    const row = ctx.request.body
    const result = await knex.insert(row).into('Power')
    ctx.body = ctx.succ(result)
  },

  async update (ctx) {
    const idx = ctx.params
    const row = ctx.request.body
    const result = await knex('Power').where(idx).update(row)
    ctx.body = ctx.succ(result)
  },

  async delete (ctx) {
    const idx = ctx.params
    const result = await knex('Power').where(idx).delete()
    ctx.body = ctx.succ(result)
  }

}
