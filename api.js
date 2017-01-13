let express     = require('express')
,   app         = express()
,   bodyParser  = require('body-parser')
,   mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function Api(port, routes) {
  this._router = express.Router();

  app.use('/api', this._router);

  this.start = () => new Promise((resolve, reject) => {
    try {
      app.listen(port);
      console.info(`Api live in 0.0.0.0:${port}`);

      mongoose.connect('mongodb://tinyapi:abc.123@ds163758.mlab.com:63758/tinyurl');

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
