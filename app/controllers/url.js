let Url   = require('../models/url')
,   View  = require ('../views')
,   uid   = require('../scripts/uid');

let UrlController = {
  list: (req, res) => {
    Url.list().then((result) => {

      res.json({
        data: result
      });
    });
  },
  find: (req, res) => {

    Url.findById(req.params.id)
    .then((url) => {
      res.json(url);
    });
  },
  create: (req, res) => {
    const { name } = req.body;

    const url = new Url({
      name: name,
      clicks: 0,
      short: uid()
    });

    Url.insert(url)
    .then((_url) => {
      res.json(_url);
    });
  },
  update: (req, res) => {
    Url.update(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    });
  },
  delete: (req, res) => {
    Url.remove(req.params.id)
    .then((data) => {
      res.json({success: true});
    })
  },
  findByShort: (req, res) => {
    Url.findByShort(req.params.short)
    .then((url) => {
      res.json({url});
    });
  }
};

module.exports = UrlController;
