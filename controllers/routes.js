const
  Route = require('../models/Routes.js')

module.exports = {
  index,
  show,
  create,
  update,
  destroy
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
  Route.create(req.body, (err, route) => {
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
