
// const seedData = require('./seeds.json')
const mongoose = require('./userschema')

const Woofington = mongoose.model('Woofington')

Woofington.remove({})
    .then(() => {
        return Woofington.collection.insert(
        
            {   
            "email": "",
            "password": ""
        
    })
    .then((seededData) => {
        console.log(seededData)
        process.exit()
    })



/*  
const Candidate = require('./schema')
const seedData = require('./seeds.json')
no pronlmelno need of soory enjoythe trip

*/
