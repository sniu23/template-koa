
const knex = require('../../lib/knex')

module.exports = {

  async find (ctx) {
    const _ = ctx.query
    const rows = await knex.select().from('role').where(JSON.parse(_.whe)).limit(parseInt(_.lim) || 10).offset(parseInt(_.off) || 0)
    const count = await knex.count('* as cnt').from('role').where(JSON.parse(_.whe))
    ctx.body = ctx.succ({rows, count: count[0].cnt})
  },

  async kv (ctx) {
    const _ = ctx.query
    const rows = await knex.select(['code', 'name']).from('role').where('code', 'like', _.whe + '%').limit(10).offset(0)
    ctx.body = ctx.succ(rows)
  },

  async findOne (ctx) {
    const idx = ctx.params
    const rows = await knex.first().from('role').where(idx)
    ctx.body = ctx.succ(rows[0])
  },

  async insert (ctx) {
    let row = ctx.request.body
    row = Object.assign(row, { createdAt: knex.raw('now()'), updatedAt: knex.raw('now()') })
    const result = await knex.insert(row).into('role')
    ctx.body = ctx.succ(result)
  },

  async update (ctx) {
    const idx = ctx.params
    let row = ctx.request.body
    row = Object.assign(row, { updatedAt: knex.raw('now()') })
    console.log(knex('role').where(idx).update(row).toString())
    const result = await knex('role').where(idx).update(row)
    ctx.body = ctx.succ(result)
  },

  async delete (ctx) {
    const idx = ctx.params
    const result = await knex('role').where(idx).delete()
    ctx.body = ctx.succ(result)
  }

}
