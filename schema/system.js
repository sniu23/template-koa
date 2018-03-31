
require('dotenv').config()
const knex = require('../src/lib/knex')

async function up () {
  const result = await knex.schema.withSchema('system')
    .createTable('user', function (table) {
      table.string('no', 20).comment('编号').notNullable()
      table.string('name', 20).comment('姓名').notNullable()
      table.string('password', 32).comment('密码').notNullable()
      table.string('mail', 40).comment('邮箱')
      table.string('mobile', 20).comment('手机')
      table.string('roleCode', 20).comment('角色代码').notNullable()
      table.boolean('valid').comment('可用否').defaultTo(true)
      table.date('createAt')
      table.string('createBy', 20)
      table.primary('no') // .unique
      table.index('roleCode')
    })
    .createTable('role', function (table) {
      table.string('code', 20).comment('角色代码').notNullable()
      table.string('name', 20).comment('角色名字').notNullable()
      table.boolean('valid').comment('可用否').defaultTo(true)
      table.date('createAt')
      table.string('createBy', 20)
      table.primary('code') // .unique
      table.unique('name')
    })
    .createTable('page', function (table) {
      table.string('path', 40).comment('页面路径').notNullable()
      table.string('name', 20).comment('页面名字').notNullable()
      table.string('icon', 20).comment('图标')
      table.string('action', 120).comment('动作列表')
      table.string('father', 40).comment('上级菜单').defaultTo('')
      table.boolean('valid').comment('可用否').defaultTo(true)
      table.date('createAt')
      table.string('createBy', 20)
      table.primary('path') // .unique
      table.unique('name')
      table.index('father')
    })
    .createTable('power', function (table) {
      table.string('roleCode', 20).comment('角色代码').notNullable()
      table.string('pagePath', 40).comment('页面路径').notNullable()
      table.string('allow', 120).comment('允许操作')
      table.boolean('valid').comment('可用否').defaultTo(true)
      table.date('createAt')
      table.string('createBy', 20)
      table.primary(['rolecode', 'pagePath']) // .unique
    })
  return result
}

up().then((result) => {
  console.log('UP finished!' + result)
}).catch((err) => {
  console.log(err)
})
