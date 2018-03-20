
const knex = require('../src/lib/knex')

async function up () {
  const result = await knex.schema.withSchema('BUSNESS')
    .createTable('User', function (table) {
      table.string('NO', 20).comment('编号').notNullable()
      table.string('Name', 20).comment('姓名').notNullable()
      table.string('Password', 32).comment('密码').notNullable()
      table.string('Mail', 40).comment('邮箱')
      table.string('Mobile', 20).comment('手机')
      table.string('RoleCode', 20).comment('角色代码').notNullable()
      table.boolean('Valid').comment('可用否').defaultTo(true)
      table.date('CreateAt')
      table.string('CreateBy', 20)
      table.primary('NO') // .unique
      table.index('RoleCode')
    })
    .createTable('Role', function (table) {
      table.string('Code', 20).comment('角色代码').notNullable()
      table.string('Name', 20).comment('角色名字').notNullable()
      table.boolean('Valid').comment('可用否').defaultTo(true)
      table.date('CreateAt')
      table.string('CreateBy', 20)
      table.primary('Code') // .unique
      table.unique('Name')
    })
    .createTable('Page', function (table) {
      table.string('Path', 40).comment('页面路径').notNullable()
      table.string('Name', 20).comment('页面名字').notNullable()
      table.string('Icon', 20).comment('图标')
      table.string('Action', 120).comment('动作列表')
      table.string('Father', 40).comment('上级菜单').defaultTo('')
      table.boolean('Valid').comment('可用否').defaultTo(true)
      table.date('CreateAt')
      table.string('CreateBy', 20)
      table.primary('Path') // .unique
      table.unique('Name')
      table.index('Father')
    })
    .createTable('Power', function (table) {
      table.string('RoleCode', 20).comment('角色代码').notNullable()
      table.string('PagePath', 40).comment('页面路径').notNullable()
      table.string('Allow', 120).comment('允许操作')
      table.boolean('Valid').comment('可用否').defaultTo(true)
      table.date('CreateAt')
      table.string('CreateBy', 20)
      table.primary(['RoleCode', 'PagePath']) // .unique
    })
  return result
}

up().then((result) => {
  console.log('UP finished!' + result)
}).catch((err) => {
  console.log(err)
})
