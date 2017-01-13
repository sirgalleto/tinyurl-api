let Api = require('./api');
let urlRoutes = require('./app/routes/url');

const port = process.env.PORT || 8080;

const routes = [
  ...urlRoutes
]

let api = new Api(port, routes);


api.start();
