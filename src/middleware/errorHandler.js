
const debug = require('debug')('error')
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    debug('error is happen: %O', err)
    ctx.type = 'application/json'
    ctx.status = err.statusCode || err.status || 500
    const msg = (ctx.status === 500 && NODE_ENV === 'production') ? 'Internal Server Error!' : err.message
    ctx.body = {
      success: false,
      message: msg
    }
  }
}
