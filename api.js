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
      console.info(`Api live in 0.0.0.0:${port}`);

      this._registerRoutes();

      resolve(app);
    }
    catch(e) {
      reject(e);
    }
  });

  this._registerRoutes = () => {
    console.log('si');
  }
}

module.exports = Api;
