const mongooseAdapter = {
  async insert (type, data) {
    const Generic = require(`../models/${type}`)
    const holder = new Generic(data)
    holder.save((err) => {
      if (err) {
        console.log(err)
        throw new Error()
      } else {
        return true
      }
    })
  },
  async update (type, data, who) {
    const generic = require(`../models/${type}`)
    const holder = await generic.findOne(who)
    if (!holder) {
      return false
    }
    const query = await generic.findByIdAndUpdate({ _id: holder.id }, data)
    if (query) {
      return true
    } else {
      throw new Error()
    }
  },

  async fetch (type, who) {
    const generic = require(`../models/${type}`)
    const holder = await generic.findOne(who)
    if (holder) {
      return holder
    } else {
      return false
    }
  },

  async fetchMany (type, filter = null) {
    const generic = require(`../models/${type}`)
    const holder = await generic.find().sort(filter)
    if (holder) {
      return holder
    } else {
      throw new Error()
    }
  }
}

module.exports = mongooseAdapter
