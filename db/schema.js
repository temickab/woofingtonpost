const mongoose = require(./connection)

const WoofingtonSchema = new mongoose.Schema({
    name: String,
    site: String
  })

  const Woofington = mongoose.model('Woofington', WoofingtonSchema)

  module.exports = Woofington
