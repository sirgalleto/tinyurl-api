'use strict';

// Dependencies

import express from 'express';

import Url            from '../models/url';
import UrlController  from '../controllers/url';

const router = express.Router();

router.get('/urls', UrlController.list);
router.get('/urls/:id', UrlController.find);
router.post('/urls', UrlController.create);
router.put('/urls/:id', UrlController.update);
router.delete('/urls/:id', UrlController.delete);

export default router;
