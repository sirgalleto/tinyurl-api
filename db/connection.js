'use strict';

// Dependencies

import mongoose from 'mongoose';

// Mongo connection

export default function({mongoDB}) {
  mongoose.connect(mongoDB.uri, mongoDB.options);
  mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
    process.exit(-1);
  });
}
