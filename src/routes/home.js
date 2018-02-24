const Router = require('koa-router')
const router = new Router()

const ctrl = require('../controllers/home')

router.get('/home/index', ctrl.index)
router.get('/home/knex', ctrl.knex)
router.get('/home/fail', ctrl.fail)
router.get('/home/succ', ctrl.succ)
router.get('/home/find', ctrl.find)

module.exports = router.routes()
