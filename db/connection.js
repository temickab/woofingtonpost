const mongoose = require('mongoose')
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/project2") //I would give your database a name specific like woofingtonPostDb like you have below
}

//mongoose.connect('mongodb://localhost/woofingtonpost1', { useMongoClient: true })


mongoose.Promise = Promise

module.exports = mongoose


// remove unused code
