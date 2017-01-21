// Dependencies

import express from 'express';

import Url from '../models/url';

const router = express.Router();

router.get('/:short', (req, res) => {
  Url.findByShortAndIncrease(req.params.short)
      .then(url => {
        res.redirect(url.name);
      })
      .catch(error => {
        res.status(404).send({ error: 'Not found' });
      });
});

export default router;
