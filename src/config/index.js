
module.exports = {
  knex: {
    client: process.env.DB_CLIENT,
    connection: {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectString: process.env.DB_CONNECTSTRING
    }
  },

  secret: process.env.SECRET || 'secret',

  cors: {
    origin: '*',
    exposeHeaders: ['Authorization'],
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowHeaders: ['Authorization', 'Content-Type'],
    keepHeadersOnError: true
  },

  port: process.env.PORT || '3000'
}
