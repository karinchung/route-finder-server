const
  mongoose = require('mongoose'),
  routesSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    rating: String,
    stars: Number,
    coordinates: Array,
    img: String
  })

const Route = mongoose.model('Route', routesSchema)
module.exports = Route
