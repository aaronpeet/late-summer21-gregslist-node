import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HomesService {
  async getAll(query = {}) {
    const homes = await dbContext.Homes.find(query)
    return homes
  }
}

export const homesService = new HomesService()
