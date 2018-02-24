
const config = require('../config')
const jwt = require('jsonwebtoken')

module.exports = {
  async login (ctx) {
    // const { userName, userPass } = ctx.request.body
    const user = 'foobar'
    const token = jwt.sign({
      data: user
    }, config.secret, { expiresIn: '1h' })
    // const verify = jwt.verify(token, config.secret)
    const verify = jwt.verify(token, '1')
    ctx.body = {
      user, token, verify
    }
  }
}
