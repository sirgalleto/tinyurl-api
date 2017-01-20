'use strict';

import redirectRouter from './redirect';

export default function(app) {
  // Subscribe routes to the app

  app.use(redirectRouter);
}
