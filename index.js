let mongoose  = require('mongoose')
,   bluebird  = require('bluebird')
,   Api       = require('./api')
,   urlRoutes = require('./app/routes/url');

const port = process.env.PORT || 8080;

const routes = [
  ...urlRoutes
]

let api = new Api(port, routes);

api.start()
.then(() => {
  let options = { promiseLibrary: bluebird };

  mongoose.connect(
    'mongodb://tinyapi:abc.123@ds163758.mlab.com:63758/tinyurl',
    options
  );
})
.catch((e) => {
  console.error(e);
});
