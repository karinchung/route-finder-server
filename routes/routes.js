const
  express = require('express'),
  routesRouter = new express.Router(),
  routesCtrl = require('../controllers/routes.js'),
  Route = require('../models/Routes.js'),
  authorize = require('../config/serverAuth.js').authorize

routesRouter.route('/')
  .get(routesCtrl.index)

routesRouter.route('/local')
  .get(routesCtrl.getGeocode)

routesRouter.use(authorize)

routesRouter.route('/')
  .post(routesCtrl.create)

routesRouter.route('/favorites')
  .post(routesCtrl.favorite)

routesRouter.route('/:id')
  .get(routesCtrl.show)
  .patch(routesCtrl.update)
  .delete(routesCtrl.destroy)

routesRouter.route('/favorites/:id')
  .delete(routesCtrl.deleteFavorite)

module.exports = routesRouter
