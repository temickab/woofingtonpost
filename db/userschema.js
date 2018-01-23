//remember to CamelCase or hyphenate your filenames

const mongoose = require('./connection')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
  })

mongoose.model('UserDetail', UserSchema) //This model should be called User instead of UserDetail. Make sure you change it in other places

module.exports = mongoose
