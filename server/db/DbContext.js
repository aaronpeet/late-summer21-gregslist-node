import mongoose from 'mongoose'
import CarSchema from '../models/Car'
import ValueSchema from '../models/Value'
import HomeSchema from '../models/Home'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Cars = mongoose.model('Car', CarSchema)
  Homes = mongoose.model('Home', HomeSchema)
}

export const dbContext = new DbContext()
