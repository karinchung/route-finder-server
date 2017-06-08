const
  express = require('express'),
  app = express(),
  dotenv = require('dotenv').load({silent: true}),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  usersRoutes = require('./routes/users.js'),
  routesRoutes = require('./routes/routes.js'),
  cors = require('cors'),
  mongoURL = process.env.MONGO_URL || 'mongodb://localhost/route-finder',
  port = process.env.PORT || 3001

mongoose.connect(mongoURL, (err) => {
  console.log(err || 'Connected to Mongodb')
})

// log incoming requests to console
app.use(logger('dev'))

// allows incoming ajax from other domains
app.use(cors())

// interpret bodies of data
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.json({message: "This is Root"})
})

app.use('/users', usersRoutes)
app.use('/routes', routesRoutes)

app.listen(port, (err) => {
  console.log(err || `Server running on port ${port}`)
})
