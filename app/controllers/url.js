let Url   = require('../models/url')
,   View  = require ('../views')
,   uid   = require('../scripts/uid');


let UrlController = {
  list: (req, res) => {
    View.json.promise(
      Url.list(), res
    );
  },
  find: (req, res) => {
    View.json.promise(
      Url.findById(req.params.id), res
    );
  },
  create: (req, res) => {
    const url = new Url({
      name: req.body.name,
      clicks: 0,
      short: uid()
    });

    View.json.promise(
      Url.insert(url), res
    );
  },
  update: (req, res) => {
    View.json.promise(
      Url.update(req.params.id, req.body), res
    );
  },
  delete: (req, res) => {
    View.json.promise(
      Url.remove(req.params.id), res
    );
  },
  findByShort: (req, res) => {
    View.json.promise(
      Url.findByShort(req.params.short), res
    );
  }
};

module.exports = UrlController;
