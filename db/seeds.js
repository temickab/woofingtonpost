
const Woofington = require('./schema')
const seedData = require('./seeds.json')

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
