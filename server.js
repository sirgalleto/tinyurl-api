// Main file

'use strict';

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Dependencies

import mongoose from 'mongoose';

import createConfig from './config/environment';
import connection from './db/connection';
import Api from './api';
import urlRoutes from './app/routes/url';

const config = createConfig(env);
connection(config);

const port = config.port;

const routes = [
  ...urlRoutes
];

let api = new Api(port, routes);
let app = api.start();

module.exports = app;
