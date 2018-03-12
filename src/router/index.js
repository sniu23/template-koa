const Router = require('koa-router')
const router = new Router()

const home = require('./home')
const user = require('./user')

router.use(user)
router.use('/api', home)

module.exports = router
