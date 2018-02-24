// const config = require('../config')
// const db = require('knex')(config.knex)

module.exports = {
  async find (db) {
    const data = await db('DUAL').select()
    return data
  },

  async find1 (db) {
    const data = await this.find(db)
    return data
  }
}
