'use strict';

import redirectRouter from './redirect';
import urlRouter      from './url';

export default function(app) {

  // Subscribe routes to the app

  app.use('/api', urlRouter);
  app.use('/', redirectRouter);
}
