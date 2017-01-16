let mongoose  = require('mongoose')
,   Api       = require('./api')
,   urlRoutes = require('./app/routes/url')
,   env       = require('./env');

const port = process.env.PORT || 8080;

const routes = [
  ...urlRoutes
]

let api = new Api(port, routes);

api.start()
.then(() => {
  mongoose.connect(
    env.MONGO_CREDENTIALS
  );
})
.catch((e) => {
  console.error(e);
});
