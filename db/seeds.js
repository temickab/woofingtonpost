
// const seedData = require('./seeds.json')
const mongoose = require('./schema')

const Woofington = mongoose.model('Woofington')

Woofington.remove({})
    .then(() => {
        return Woofington.collection.insert(
        [
            {   
            "name": "Funny Puppy",
            "site": "https://www.funnypuppy.com"
            },
            {
            "name": "The Blind Dog Cafe",
            "site": "https://www.blinddogcafe.com"
            },
            {
            "name": "Dog Adoption",
            "site": "https://www.dogadoption.com"
            },
            {
            "name": "Donate",
            "site": "https://www.helpdogs.com"
            },
            {
            "name": "Disabled dogs",
            "site": "https://www.helpdogs.com"
            },
            {
            "name": "Puppy Cam",
            "site": "https://www.livepuppycam.com" 
            }
        ] )
    })
    .then((seededData) => {
        console.log(seededData)
        process.exit()
    })



/*  
const Candidate = require('./schema')
const seedData = require('./seeds.json')

*/
