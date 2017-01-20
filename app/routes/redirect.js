import express from 'express';

const router = express.Router();

router.get('/:short', (req, res) => {
  res.error('not implemented');
});

export default router;
