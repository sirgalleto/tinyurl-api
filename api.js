let express     = require('express')
,   app         = express()
,   bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function Api(port, routes) {
  this._router = express.Router();

  app.use('/api', this._router);

  this.start = () => {
    try {
      app.listen(port);
      this._registerRoutes();

      console.info(`Api live in 0.0.0.0:${port}`);
    }
    catch(e) {
      throw new Error(e);
    }

    return app;
  };

  this._registerRoutes = () => {
    routes.forEach(route => {
      this._router[route.method.toLowerCase()](route.url, route.action);
    });
  }
}

module.exports = Api;
