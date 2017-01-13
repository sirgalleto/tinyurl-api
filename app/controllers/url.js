let Url = require('../models/url')
,   uid = require('../scripts/uid');

// TestId 58792220319cd68a429330eb

let UrlController = {
  list: (req, res) => {
    Url.list().then((result) => {

      res.json({
        data: result
      });
    });
  },
  find: (req, res) => {

    Url.find(req.params.id);
    res.send('finding');
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
      console.log(_url);
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
    res.send('deleting');
  }
};

module.exports = UrlController;
