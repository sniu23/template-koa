
const knex = require('../lib/knex')

exports.find = find
exports.find1 = find1

async function find (rds = knex) {
  const data = await rds.select().from('DUAL')
  return data
}

async function find1 (rds = knex) {
  const data1 = await rds.select().from('DUAL')
  const data2 = await find(rds)
  return { data1, data2 }
}
