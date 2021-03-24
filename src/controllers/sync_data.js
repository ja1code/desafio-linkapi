class SyncData {
  constructor (blingApiAdapter, PipedriveAdapter, DatabaseAdapter) {
    this.blingApi = blingApiAdapter
    this.pipedriveApi = PipedriveAdapter
    this.database = DatabaseAdapter
  }

  async execute() {
    try {
      const deals = await this.pipedriveApi.get('deals', { status: 'won' }).data

      for (const deal of deals) {
        const blingRequest = this.convertPipedriveResponseToBlingRequest(deal)
        await this.blingApi.post('pedido', blingRequest)
      }

    } catch (error) {
      console.log(error)
      return error
    }
  }

  async convertPipedriveResponseToBlingRequest (deal) { // Long but clear name, to help the next dev
    // logic that transforms pipedrive deal object into bling request object (xml)
  }
}