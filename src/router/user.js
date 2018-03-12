const Router = require('koa-router')
const router = new Router()

const ctrl = require('../controller/user')

router.get('/login', ctrl.login)

module.exports = router.routes()
