const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/havenotnamedyet', { useMongoClient: true }))

mongoose.Promise = Promise

module.exports = mongoose


/*
mongoose.Promise = Promise
module.exports = mongoose

Still learning mongoDB so taking one step at a time at
this point.
*/
