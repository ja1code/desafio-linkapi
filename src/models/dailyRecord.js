const mongoose = require('mongoose')

const DailyRecordSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  total_value: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('dailyRecord', DailyRecordSchema)