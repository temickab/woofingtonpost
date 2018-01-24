// I would focus on getting the Article data to seed

const user=require('./userschema')
console.log('user schema',user)
const userdetail = user.model('UserDetail') 
console.log(userdetail)


userdetail.collection.insert({email:"abc@gmail.com",password:"124"},(err,res)=>{
    console.log("error",err);
    console.log("Response data inserted",res);
})


// This should your Article model, rather 'Woofington'; your db seems to have been named woofington or woofington1 at one point, but here you'd be importing a model here

//const Woofington = mongoose.model('Woofington') 

/*Woofington.remove({})
    .then(() => {
        //On the line below we're accessing the collection associated with model, and insert JSON data that matches the model's schema
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
