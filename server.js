let express     = require('express')
,   app         = express()
,   bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

let router = express.Router();

router.get('/', (req, res) => {
  res.send("Live");
});

app.use('/api', router);

app.listen(port);
console.info(`Api live in 0.0.0.0:${port}`);
