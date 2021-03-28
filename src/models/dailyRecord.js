const mongoose = require('mongoose')

const DailyRecordSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('dailyRecord', DailyRecordSchema)
