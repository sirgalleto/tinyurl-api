'use strict';

// Dependencies

import _ from 'lodash';

// All configurations will extend these base options

let base = {
  env: process.env.NODE_ENV,
  port: process.env.port || 8080,
  mongoDB: {
    options: {
      db: {
        safe: true
      }
    }
  }
};

// Export the config object based on the NODE_ENV

export default function(env) {
  console.info(env);
  return _.merge(base, require('./' + env + '.env.js') || {});
};
