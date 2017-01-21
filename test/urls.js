'use strict';

// Dependencies

import request    from 'supertest';
import httpStatus from 'http-status-codes';
import mongoose   from 'mongoose';
import { expect } from 'chai';

import app        from '../server';
import Url        from '../app/models/url';

describe('Url', () => {

  describe('Controller', () => {

    let id;

    const url = {
      name: 'http://google.com/'
    };

    const urlUpdated = {
      name: 'http://facebook.com/'
    };

    before((done) => mongoose.connection.db.dropDatabase(() => done()));

    it('POST /urls', () => {
      return request(app)
            .post('/api/urls')
            .send(url)
            .expect(httpStatus.OK)
            .then(res => {
              id = res.body.data._id;

              expect(res.body).to.be.a('object');
              expect(res.body.success).to.equal(true);
              expect(res.body.data).to.be.a('object');
              expect(res.body.data.name).to.equal(url.name);
            });
    });

    it('GET /urls', () => {
      return request(app)
            .get('/api/urls')
            .expect(httpStatus.OK)
            .then(res => {
              expect(res.body).to.be.a('object');
              expect(res.body.success).to.equal(true);
              expect(res.body.data).to.be.a('array');
            });
    });

    it('GET /urls/:id', () => {
      return request(app)
            .get(`/api/urls/${id}`)
            .expect(httpStatus.OK)
            .then(res => {
              expect(res.body).to.be.a('object');
              expect(res.body.success).to.equal(true);
              expect(res.body.data).to.be.a('object');
            })
    });

    it('PUT /urls/:id', () => {
      return request(app)
            .put(`/api/urls/${id}`)
            .send(urlUpdated)
            .expect(httpStatus.OK)
            .then( res => {
              expect(res.body).to.be.a('object');
              expect(res.body.success).to.equal(true);
              expect(res.body.data).to.be.a('object');
              expect(res.body.data.name).to.be.equal(urlUpdated.name);
            });
    });

    it('DELETE /urls/:id', () => {
      return request(app)
            .delete(`/api/urls/${id}`)
            .expect(httpStatus.OK)
            .then( res => {
              expect(res.body).to.be.a('object');
              expect(res.body.success).to.equal(true);
              expect(res.body.data).to.be.equal(false);
            });
    });

  });
});
