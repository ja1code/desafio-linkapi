

const mongooseAdapter = {
  async insert (type, data) {
    let generic = require(`../models/${type}`)
    let holder = new generic(data)
    holder.save((err) => {
      if (err) {
        throw new Error()
      } else {
        return true
      }
    })
  },
  async update (type, data, who) {
    let generic = require(`../models/${type}`)
    let holder = await generic.findOne(who)
    if (!holder) {
      return false
    }
    let query = await generic.findByIdAndUpdate({_id: holder.id}, data)
    if (query) {
      return true
    } else {
      throw new Error()
    }
  },

  async fetch (type, who) {
    let generic = require(`../models/${type}`)
    let holder = await generic.findOne(who)
    if (holder) {
      return holder
    } else {
      throw new Error()
    }
  },

  async fetchMany (type, filter=null) {
    let generic = require(`../models/${type}`)
    let holder = await generic.find().sort(filter)
    if (holder) {
      return holder
    } else {
      throw new Error()
    }
  }
}

module.exports = mongooseAdapter