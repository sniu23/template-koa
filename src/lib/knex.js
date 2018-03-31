
const NODE_ENV = process.env.NODE_ENV || 'development'
const config = require('../config/mysql')
const knex = require('knex')(config[NODE_ENV])

module.exports = knex
