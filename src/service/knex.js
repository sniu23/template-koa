// require('dotenv').config()
// const config = require('./knexfile')
// const db = require('knex')(config)

const db = require('../lib/knex')
const _ = require('lodash')

// db('WZX_FILE').where('WZX01', 'F3216651').select()
//   .then((data) => {
//     console.log(data)
//     return db('WZX_FILE').where('WZX01', 'H3216651').select()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => { console.log(err) })

// console.log(sql)
// db.table('WZX_FILE').pluck('WZX01').then(function (ids) { console.log(ids) })

// const sele = async function (db) {
//   // const data = await db('WZX_FILE').where('WZX01', 'F3216651').select()
//   // const data = await db.table('WZX_FILE').where('WZX01', 'F3216651').select()
//   // const data = await db.table('WZX_FILE').where('WZX01', 'F3216651')
//   const data = await db.select('WZX01').from('WZX_FILE').where('WZX01', 'like', '%3216651')
//   const test = _.unzip(data)
//   // const data = await db.select('*').from('WZX_FILE').where('WZX01', 'F3216651')
//   console.log(data)
//   console.log(test)
//   // return data
// }
// sele(db)

const tran1 = async function (db) {
  const a = await db.transaction(async function (trx) {
    const data1 = await trx('WZX_FILE').where('WZX01', 'F3216651').select()
    const data2 = await trx('WZX_FILE').where('WZX01', 'H3216651').select()
    // await trx.rollback()
    return {data1, data2}
  })
  console.log(a)
}
tran1(db)

// function index (idx, rds = db) {
//   return rds('WZX_FILE').where(idx)
// }
// const sele = async function (idx, rds = db) {
//   const data = await index(idx).select()
//   console.log(data)
//   return data
// }
// sele({WZX01: 'F3216651'})
// sele({WZX01: 'H3216651'})

// const get = async function (db) {
//   // const data = await db('WZX_FILE').first()
//   // const data = await db.table('WZX_FILE').first()
//   const data = await db('WZX_FILE').first([ 'WZX01', 'WZX02', 'WZX03' ])
//   // const data = await db('CTBSHFJCZZ.BSH_FILE').first()
//   console.log(data)
//   return data
// }
// get(db)

// const inse = async function (db) {
//   // const data = await db('TEST').insert({TEST01: 'ABC', TEST02: 'efg'})
//   // const data = await db('TEST').returning('TEST01').insert({TEST01: 'a1', TEST02: 'a2'})
//   // const data = await db('TEST').returning([ 'TEST01', 'TEST02' ]).insert([
//   //   {TEST01: 'd1', TEST02: 'd2'},
//   //   {TEST01: 'e1', TEST02: 'e2'}
//   // ])
//   // const data = await db.insert({TEST01: 'ABC', TEST02: 'efg'}).into('TEST')
//   const data = await db.insert({TEST01: 'ABC', TEST02: 'efg'}).into('TEST')
//   // const data = await db.insert({TEST01: 'ABC', TEST02: 'efg'}).into('TEST').returning('TEST01')
//   console.log(data)
//   return data
// }
// inse(db)

// const upda = async function (db) {
//   const data = await db('TEST').where('TEST01', 'a5').update({TEST04: 'a4', TEST03: 'a3'})
//   console.log(data)
//   return data
// }
// upda(db)

// const dele = async function (db) {
//   const data = await db('TEST').where('TEST01', 'ABC').del()
//   console.log(data)
//   return data
// }
// dele(db)

// -----------------------------------------------------------------------------------------------------
// 报错回滚
// const tran1 = async function (db) {
//   await db.transaction(async function (trx) {
//     await trx.insert({TEST01: 'a4', TEST02: 'a4'}).into('TEST')
//     await trx.insert({TEST01: 'a4', TEST05: 'a4'}).into('TEST') // no column: TEST05, throw err is promise ...
//   })
//   console.log('tran!') // auto rollback, dont exec
// }
// tran1(db)

// 自动提交
// const tran1 = async function (db) {
//   await db.transaction(async function (trx) {
//     await trx.insert({TEST01: 'av', TEST02: 'av'}).into('TEST')
//     await trx.insert({TEST01: 'av', TEST02: 'av'}).into('TEST')
//   })
//   console.log('tran!') // auto commit
// }
// tran1(db)

// try/catch包裹
// const tran1 = async function (db) {
//   try {  // wrap with try/catch
//     await db.transaction(async function (trx) {
//       await trx.insert({TEST01: 'ax', TEST02: 'ax'}).into('TEST')
//       await trx.insert({TEST01: 'ax', TEST05: 'ax'}).into('TEST') // no column: TEST05
//     })
//     console.log('tran!') // auto rollback, dont exec
//   } catch (err) {
//     console.log(err) // err message is clear!
//   }
// }
// tran1(db)

// 提交后的不再执行
// const tran1 = async function (db) {
//   try {
//     await db.transaction(async function (trx) {
//       await trx.insert({TEST01: 'a4', TEST02: 'a4'}).into('TEST')
//       await trx.insert({TEST01: 'a6', TEST02: 'a6'}).into('TEST')
//       await trx.commit()
//       await trx.insert({TEST03: 'a7', TEST04: 'a7'}).into('TEST') // after commit dont exec
//     })
//     console.log('tran!') // show
//   } catch (err) {
//     console.log(err)
//   }
// }
// tran1(db)

// 手动触发回滚
// const tran2 = async function (db) {
//   try {
//     await db.transaction(async function (trx) {
//       const cnt = await trx.insert({TEST01: 'bb', TEST02: 'bb'}).into('TEST')
//       if (cnt === 1) {
//         // throw new Error('something happen!')  // auto rollback
//         await trx.rollback() // get break with error
//       }
//       await trx.insert({TEST02: 'aa', TEST01: 'aa'}).into('TEST')
//     })
//     console.log('tran!') // show
//   } catch (err) {
//     console.log(err)
//   }
// }
// tran2(db)

// 手动触发回滚，没有try/catch包裹
// const tran2 = async function (db) {
//   await db.transaction(async function (trx) {
//     const cnt = await trx.insert({TEST01: 'bb', TEST02: 'bb'}).into('TEST')
//     if (cnt === 1) {
//       // throw new Error('something happen!')  // auto rollback
//       await trx.rollback() // get break with error
//     }
//     await trx.insert({TEST02: 'aa', TEST01: 'aa'}).into('TEST')
//   })
//   console.log('tran!') // show
// }
// tran2(db)

// const upda = async function (db) {
//   const data = await db('TEST').where('TEST01', 'av').update({TEST04: 'avv', TEST03: 'avv'})
//   console.log(data)
//   return data
// }
// const tran2 = async function (db) {
//   try {
//     await db.transaction(async function (trx) {
//       await upda(trx)
//       await trx.insert({TEST01: 'a6', TEST05: 'a6'}).into('TEST') // no column: TEST05
//     })
//     console.log('tran!') // show
//   } catch (err) {
//     console.log(err)
//   }
// }
// tran2(db)

// const get = async function (db) {
//   // const data = await db('WZX_FILE').first()
//   // const data = await db.table('WZX_FILE').first()
//   const data = await db('WZX_FILE').first([ 'WZX01', 'WZX02', 'WZX03' ])
//   // const data = await db('CTBSHFJCZZ.BSH_FILE').first()
//   console.log(data)
//   return data
// }
// get(db)
