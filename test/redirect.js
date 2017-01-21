'use strict';

import request    from 'supertest';
import httpStatus from 'http-status-codes';
import mongoose   from 'mongoose';
import { expect } from 'chai';

import app        from '../server';
import Url        from '../app/models/url';

describe('Redirection', () => {

  const url = new Url({
    name: 'http://google.com/',
    short: 'abcdefg'
  });

  before((done) => mongoose.connection.once('connected', () =>
    mongoose.connection.db.dropDatabase(() => done())
  ));

  before(() => Url.insert(url));

  describe('Controller', () => {

    it('Get /:short', () => {
      return request(app)
      .get(`/${url.short}`)
      .expect(302);
    });

  });
});
