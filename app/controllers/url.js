let UrlModel = require('../models/url');

let UrlController = {
  get: (req, res) => {
    console.log(req.query);
    res.send('OK');
  }
};

module.exports = UrlController;
