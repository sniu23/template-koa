const config = require('../../knexfile')
const NODE_ENV = process.env.NODE_ENV || 'development'
const knex = require('knex')(config[NODE_ENV])

module.exports = knex
