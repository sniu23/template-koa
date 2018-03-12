const config = require('../config')
const knex = require('knex')(config.knex)

module.exports = knex
