const
  express = require('express'),
  routesRouter = new express.Router(),
  routesCtrl = require('../controllers/routes.js'),
  Route = require('../models/Routes.js'),
  authorize = require('../config/serverAuth.js').authorize

routesRouter.route('/')
  .get(routesCtrl.index)

routesRouter.use(authorize)

routesRouter.route('/')
  .post(routesCtrl.create)

routesRouter.route('/:id')
  .get(routesCtrl.show)
  .patch(routesCtrl.update)
  .delete(routesCtrl.destroy)

module.exports = routesRouter
