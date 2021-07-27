import { homesService } from '../services/HomesService'
import BaseController from '../utils/BaseController'

export class HomesController extends BaseController {
  constructor() {
    super('api/homes')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const homes = await homesService.getAll(req.query)
      res.send(homes)
    } catch (error) {
      next(error)
    }
  }
}
