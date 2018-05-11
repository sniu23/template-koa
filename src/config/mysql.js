
require('dotenv').config()

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '10.195.190.86',
      user: 'mysql',
      password: 'cfag.1234',
      database: 'system'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      host: '10.10.10.10',
      user: 'mysql',
      password: 'password',
      database: 'system'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
