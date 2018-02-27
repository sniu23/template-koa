require('dotenv').config()
const config = require('../config')
const db = require('knex')(config.knex)

const home = require('./home')

test('home.find', async () => {
  const data = await home.find(db)
  expect(data[0].DUMMY).toBe('X')
})

test('home.find1', async () => {
  const data = await home.find1(db)
  expect(data[0].DUMMY).toBe('X')
})
