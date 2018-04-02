
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
router.get('/user', user.find)
router.get('/user/:no', user.findOne)
router.post('/user', user.insert)
router.post('/user/:no', user.update)
router.del('/user/:no', user.delete)

const role = require('../controller/system/role')
router.get('/role', role.find)
router.get('/role/:code', role.findOne)
router.post('/role', role.insert)
router.post('/role/:code', role.update)
router.del('/role/:code', role.delete)

const page = require('../controller/system/page')
router.get('/page', page.find)
router.get('/page/:path', page.findOne)
router.post('/page', page.insert)
router.post('/page/:path', page.update)
router.del('/page/:path', page.delete)

const power = require('../controller/system/power')
router.get('/power', power.find)
router.get('/power/:code/:path', power.findOne)
router.post('/power', power.insert)
router.post('/power/:code/:path', power.update)
router.del('/power/:code/:path', power.delete)

module.exports = router
