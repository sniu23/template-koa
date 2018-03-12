require('dotenv').config()
const config = require('./config')
const debug = require('debug')('app')

const Koa = require('koa')
const app = new Koa()

const errorHandler = require('./middleware/errorHandler')
const responseTime = require('koa-response-time')
const helmet = require('koa-helmet')
const cors = require('kcors')
const bodyParser = require('koa-bodyparser')
const jwt = require('koa-jwt')

app.use(errorHandler)
app.use(responseTime())
app.use(helmet())
app.use(cors(config.cors))
app.use(bodyParser())

// const knex = require('./lib/knex')
// app.context.db = knex

app.context.succ = function (data) {
  return {
    success: true,
    data
  }
}

// app.use(jwt({ secret: config.secret }).unless({ path: [/\/register/, /\/login/] }))

const routes = require('./router')
app.use(routes.routes())
app.use(routes.allowedMethods())

debug('=============================== port is: %s', config.port)
app.listen(config.port)
