// Main file

'use strict';

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Dependencies

import mongoose from 'mongoose';
import express  from 'express';

import configExpress    from './config/express';
import createConfig     from './config/environment';
import connection       from './db/connection';
import subscribeRoutes  from './app/routes';

const config = createConfig(env);
connection(config);

const app = express();
configExpress(app);
subscribeRoutes(app);

app.listen(config.port);

export default app;
