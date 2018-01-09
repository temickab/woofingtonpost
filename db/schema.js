const mongoose = require('./connection')

const WoofingtonSchema = new mongoose.Schema({
    name: String,
    site: String
  })

mongoose.model('Woofington', WoofingtonSchema)
//here you registered a woofington model
module.exports = mongoose


/*



*/

