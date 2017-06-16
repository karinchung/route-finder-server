const
  Route = require('../models/Routes.js'),
  geocoder = require('geocoder'),
  User = require('../models/User.js')
  // serverAuth = require('../config/serverAuth.js')


module.exports = {
  index,
  show,
  create,
  update,
  destroy,
  getGeocode,
  favorite,
  deleteFavorite
}

function index(req, res) {
  Route.find({}, (err, routes)  => {
    res.json(routes)
  })
}

function show(req, res) {
  Route.findById(req.params.id, (err, route) => {
    res.json(route)
  })
}

function create(req, res) {
  console.log('route  being added from the controller:')
  const newRoute = new Route(req.body)
  newRoute.user = req.decoded
  newRoute.save((err, route) => {
    res.json({success: true, message: "Route created", route})
  })
}

function update(req, res) {
  Route.findById(req.params.id, (err, route) => {
    if(err) return console.log(err)
    Object.assign(route, req.body)
    user.save((err) => {
      res.json({success: true, message: "Route updated...", route: route})
    })
  })
}

function destroy(req, res) {
  Route.findByIdAndRemove(req.params.id, (err, route) => {
    if(err) return console.log(err)
    res.json({success: true, message: "Route deleted"})
  })
}

function getGeocode(req, res) {
  console.log('getting Geocode')
  geocoder.geocode(req.query.searchValue, (err, data) => {
    console.log(req)
    res.json(data.results[0].geometry.location)
  })
}

function favorite(req, res) {
  console.log('body: ', req.body.favoriteId)
  User.findById(req.decoded._id, (err, user) => {
    user.favorites.push(req.body.favoriteId)
    user.save()
    res.json({success: true, message: "route favorited", user: user})
  })

}

function deleteFavorite() {
  console.log('deleted')
}
