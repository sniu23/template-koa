
const knex = require('../../lib/knex')

module.exports = {

  async find (ctx) {
    const rows = await knex('Page').select()
    ctx.body = ctx.succ(rows)
  },

  async findOne (ctx) {
    const rows = await knex('Page').select()
    ctx.body = ctx.succ(rows[0])
  },

  async insert (ctx) {
    const row = ctx.request.body
    const result = await knex.insert(row).into('Page')
    ctx.body = ctx.succ(result)
  },

  async update (ctx) {
    const idx = ctx.params
    const row = ctx.request.body
    const result = await knex('Page').where(idx).update(row)
    ctx.body = ctx.succ(result)
  },

  async delete (ctx) {
    const idx = ctx.params
    const result = await knex('Page').where(idx).delete()
    ctx.body = ctx.succ(result)
  }

}
