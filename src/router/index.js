
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
router.get('/user/:id', user.findOne)
router.post('/user', user.insert)
router.post('/user/:id', user.update)
router.del('/user/:id', user.delete)

const role = require('../controller/system/role')
router.get('/role', role.find)
router.get('/role1/kv', role.kv)
router.get('/role/:id', role.findOne)
router.post('/role', role.insert)
router.post('/role/:id', role.update)
router.del('/role/:id', role.delete)

const page = require('../controller/system/page')
router.get('/page', page.find)
router.get('/page/:id', page.findOne)
router.post('/page', page.insert)
router.post('/page/:id', page.update)
router.del('/page/:id', page.delete)

const power = require('../controller/system/power')
router.get('/power', power.find)
router.get('/power/:id', power.findOne)
router.post('/power', power.insert)
router.post('/power/:id', power.update)
router.del('/power/:id', power.delete)

module.exports = router
