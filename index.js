let mongoose  = require('mongoose')
,   bluebird  = require('bluebird')
,   Api       = require('./api')
,   urlRoutes = require('./app/routes/url')
,   env       = require('.env');

const port = process.env.PORT || 8080;

const routes = [
  ...urlRoutes
]

let api = new Api(port, routes);

api.start()
.then(() => {
  let options = { promiseLibrary: bluebird };

  mongoose.connect(
    env.MONGO_CREDENTIALS,
    options
  );
})
.catch((e) => {
  console.error(e);
});
