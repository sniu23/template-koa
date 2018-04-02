
require('dotenv').config()

module.exports = {
  development: {
    client: 'oracledb',
    connection: {
      user: 'ecusdba',
      password: 'dba_ecus',
      connectString: '10.134.7.108:1521/csedbs'
    }
  },
  production: {
    client: 'oracledb',
    connection: {
      user: 'WEBCUS',
      password: 'Ecusweb200',
      connectString: '10.134.7.108:1521/csedbs'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
