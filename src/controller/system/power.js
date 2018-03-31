
const knex = require('../../lib/knex')

module.exports = {

  async find (ctx) {
    const rows = await knex('Power').select()
    ctx.body = ctx.succ(rows)
  },

  async findOne (ctx) {
    const rows = await knex('Power').select()
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
