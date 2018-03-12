
const home = require('../service/home')

module.exports = {

  async index (ctx) {
    ctx.body = 'Hello!'
  },

  async knex (ctx) {
    const db = ctx.db
    const data = await db('DUAL').select()
    ctx.body = data
  },

  async fail (ctx) {
    ctx.throw(400, 'its wrong!')
  },

  async succ (ctx) {
    ctx.body = ctx.succ('im fine.')
  },

  async find (ctx) {
    const data = await home.find1(ctx.db)
    ctx.body = ctx.succ(data)
  }

}
