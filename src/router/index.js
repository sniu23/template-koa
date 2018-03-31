
const Router = require('koa-router')
const router = new Router()

const home = require('../controller/home')
router.get('/home/index', home.index)
router.get('/home/knex', home.knex)
router.get('/home/fail', home.fail)
router.get('/home/succ', home.succ)
router.get('/home/user', home.user)

const user = require('../controller/system/user')
router.post('/login', user.login)
router.post('/register', user.register)
router.get('/navigation/:role', user.navigation)

module.exports = router
