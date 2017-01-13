let UrlModel = require('../models/url');

let UrlController = {
  list: (req, res) => {
    res.send('listin');
  },
  find: (req, res) => {
    res.send('finding');
  },
  create: (req, res) => {
    res.send('creating');
  },
  update: (req, res) => {
    res.send('updating');
  },
  delete: (req, res) => {
    res.send('deleting');
  }
};

module.exports = UrlController;
