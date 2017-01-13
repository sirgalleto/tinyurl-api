let UrlController = require('../controllers/url');

module.exports = [
  {
    method: 'GET',
    url: '/urls',
    action: UrlController.get
  }
];
