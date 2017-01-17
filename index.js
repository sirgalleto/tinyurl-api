let mongoose  = require('mongoose')
,   Api       = require('./api')
,   urlRoutes = require('./app/routes/url')
,   env       = require('./env');

const port = process.env.PORT || 8080;

const routes = [
  ...urlRoutes
];

mongoose.connect(
  env.MONGO_CREDENTIALS
);

let api = new Api(port, routes);
let app = api.start();

module.exports = app;
