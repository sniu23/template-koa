
const knex = require('../lib/knex')

exports.find = find
exports.find1 = find1

async function find (rds = knex) {
  const data = await rds.select().from('DUAL')
  return data
}

async function find1 (rds = knex) {
  const data = await find(rds)
  return data
}
