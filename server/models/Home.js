import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Home = new Schema(
  {
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    description: { type: String, default: 'No description provided.' }

  },
  { timestanps: true, toJSON: { virtuals: true } }
)

export default Home
