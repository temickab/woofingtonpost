
// const seedData = require('./seeds.json')
//const mongoose = require('./schema') 

//const Woofington = mongoose.model('Woofington') 
//we will test our userscheam we created ok
const user=require('./userschema')
console.log('user schema',user)
const userdetail = user.model('UserDetail') 
console.log(userdetail)
userdetail.collection.insert({email:"abc@gmail.com",password:"124"},(err,res)=>{
    console.log("error",err);
    console.log("Response data inserted",res);
})

/*Woofington.remove({})
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
    })*/



/*  
const Candidate = require('./schema')
const seedData = require('./seeds.json')



*/
