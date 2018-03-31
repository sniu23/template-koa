
const { find1 } = require('../service/home')

module.exports = {

  async index (ctx) {
    ctx.body = 'Hello!'
  },

  async fail (ctx) {
    ctx.throw(400, 'its wrong!')
  },

  async succ (ctx) {
    ctx.body = ctx.succ('im fine.')
  },

  async knex (ctx) {
    const data = await find1()
    ctx.body = ctx.succ(data)
  },

  async user (ctx) {
    const user = ctx.state.user || ''
    ctx.body = ctx.succ(user)
  }

}
