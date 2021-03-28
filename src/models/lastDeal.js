const mongoose = require('mongoose')

const LastDealSchema = new mongoose.Schema({
  wonDate: {
    type: String,
    required: true
  },
  runDate: {
    type: String,
    required: true
  },
  dealId: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('lastDeal', LastDealSchema)
