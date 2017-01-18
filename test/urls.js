'use strict';

describe('Url', () => {
  const expect      = require('chai').expect
  ,     request     = require('supertest')
  ,     httpStatus  = require('http-status-codes')
  ,     app         = require('../index');


  describe('Model', () => {

  });

  describe('Controller', () => {
    let id;

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

    it('POST /urls', () => {
      return request(app)
            .post('/api/urls')
            .send({'name': 'http://google.com'})
            .expect(httpStatus.OK)
            .then(res => {
              id = res.body.data._id;

              expect(res.body).to.be.a('object');
              expect(res.body.success).to.equal(true);
              expect(res.body.data).to.be.a('object');
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
            .send({'name': 'http://facebook.com'})
            .expect(httpStatus.OK)
            .then( res => {
              expect(res.body).to.be.a('object');
              expect(res.body.success).to.equal(true);
              expect(res.body.data).to.be.a('object');
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
