
const knex = require('../lib/knex')

module.exports = {
  find: async function () {
    const data = await knex.select().from('DUAL')
    return data
  },
  find1: async function () {
    const data = await this.find()
    return data
  }
}
