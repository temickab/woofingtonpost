const mongoose = require('./connection')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
  })

mongoose.model('UserDetail', UserSchema)

module.exports = mongoose


/*
you see here.so you can create another file and name it userscheama
OK and do the same thingcopy and pasteokand


*/

