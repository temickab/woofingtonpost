
const seedData = require('./seedData.json')
// const mongoose = require('./schema')

const Woofington = require('./articleschema')
const user = require('./userschema')
console.log('user schema', user)
const userdetail = user.model('UserDetail')
console.log(userdetail)
userdetail.collection.insert({email: 'abc@gmail.com', password: '124'}, (err, res) => {
  console.log('error', err)
  console.log('Response data inserted', res)
})

Woofington.remove({})
    .then(() => {
      return Woofington.collection.insert(seedData)
    })
    .then(() => {
      process.exit()
    })

/*
const Candidate = require('./schema')
const seedData = require('./seeds.json')

*/
