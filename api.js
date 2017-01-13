let express     = require('express')
,   app         = express()
,   bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function Api(port, routes) {
  this._router = express.Router();

  app.use('/api', this._router);

  this.start = () => new Promise((resolve, reject) => {
    try {
      app.listen(port);
      this._registerRoutes();

      console.info(`Api live in 0.0.0.0:${port}`);
    }
    catch(e) {
      reject(e);
    }

    resolve(app);    
  });

  this._registerRoutes = () => {
    routes.forEach(route => {
      this._router[route.method.toLowerCase()](route.url, route.action);
    });
  }
}

module.exports = Api;
