module.exports = class SyncDatabaseService {
  constructor (databaseAdapter) {
    this.database = databaseAdapter
  }

  async execute (totals, dealId, wonDate) {
    for (const total of totals) {
      const totalRecord = await this.getDateInserted(total.date)
      if (!totalRecord) {
        this.insertRecord(total.date, total.value)
      } else {
        totalRecord.value += total.value
        this.updateDateRecord(total.date, totalRecord.value)
      }
    }

    this.setLastExecution(wonDate, dealId)
  }

  async setLastExecution (wonDate, dealId) {
    const today = new Date()
    const runDate = `${today.getFullYear()}-${today.getMonth() < 10 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)}-${today.getDate()}`

    await this.database.insert('lastDeal', {
      runDate,
      wonDate,
      dealId
    })
  }

  async getLastExecution () {
    const query = await this.database.fetchMany('lastDeal', { dealId: -1 })

    return query[0] || { wonDate: '2000-01-01', runDate: '2000-01-01', dealId: 0 }
  }

  async getDateInserted (date) {
    const query = await this.database.fetch('dailyRecord', {
      date
    })
    return query
  }

  async updateDateRecord (date, value) {
    await this.database.update('dailyRecord', { value }, { date })
  }

  async insertRecord (date, value) {
    await this.database.insert('dailyRecord', {
      date, value
    })
  }
}
