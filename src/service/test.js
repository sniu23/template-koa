
const _ = require('lodash')
const knex = require('../lib/knex')

var objArr = [ {a: 1, b: 2, c: 3}, {a: 2, b: 4, c: 6}, {a: 3, b: 6, c: 9}, {a: 1, b: 4, c: 9} ]

var attArr = objArr.map(function (item, value) {
  return item.a
})

// attArr = _.uniq(attArr)

function unique (array) {
  return Array.from(new Set(array))
}

attArr = unique(attArr)

console.log(attArr)

// async function get13(list) {
//   const data = await knex.withSchema('CBSPARA').where('KXA02', '13')
//     .whereIn('KXA01', list).from('KXA_FILE').select(['KXA01', 'KXA03']) // .toString()
//   return data
// }

// get13(attArr)
//   .then((d) => {
//     console.log(d)
//     return d
//   })
//   .catch((err) => { console.log(err) })

// console.log(desArr)

let desArr = [ { KXA01: '1', KXA03: '木箱' },
  { KXA01: '2', KXA03: '紙箱' },
  { KXA01: '3', KXA03: '桶裝' } ]

var test = _.toPairs({ KXA01: '1', KXA03: '木箱' })

console.log(test)
