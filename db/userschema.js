const mongoose = require('./connection')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
  })

mongoose.model('UserDetail', UserSchema)

module.exports = mongoose


/*



*/

