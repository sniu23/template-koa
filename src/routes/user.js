const Router = require('koa-router')
const router = new Router()

const ctrl = require('../controllers/user')

router.get('/login', ctrl.login)

module.exports = router.routes()
