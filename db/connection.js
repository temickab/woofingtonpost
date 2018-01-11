const mongoose = require('mongoose')
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/project2");
}

//mongoose.connect('mongodb://localhost/woofingtonpost1', { useMongoClient: true })


mongoose.Promise = Promise

module.exports = mongoose



/*db.woofingtonpost1.insert(
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
    })


Setting up the connection for mongoose
mongoose.Promise = Promise
module.exports = mongoose

Still learning mongoDB so taking one step at a time at
this point.
*/
