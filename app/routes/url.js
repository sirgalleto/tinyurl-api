let UrlController = require('../controllers/url');

module.exports = [
  {
    method: 'GET',
    url: '/urls',
    action: UrlController.list
  },
  {
    method: 'GET',
    url: '/urls/:id',
    action: UrlController.find
  },
  {
    method: 'POST',
    url: '/urls',
    action: UrlController.create
  },
  {
    method: 'PUT',
    url: '/urls/:id',
    action: UrlController.update
  },
  {
    method: 'DELETE',
    url: '/urls/:id',
    action: UrlController.delete
  },
  {
    method: 'GET',
    url: '/urls/findByShort/:short',
    action: UrlController.findByShort
  }
];
