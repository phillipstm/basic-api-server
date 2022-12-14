'use strict';

// const supertest = require('supertest');
// const { app } = require('../src/server');
// const req = supertest(app);

const logger = require('./middleware/logger');


describe('test logger middleware', () => {
  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn();//spies on the next method

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  ////turn it off!
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Logs output', () => {
    logger(req, res, next);
    console.log('req', req);
    expect(consoleSpy).toHaveBeenCalledWith(`REQUEST: ${req.method}, ${req.originalURL}`);
  });
  test('Works as expected', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(req.method, req.path);
    expect(next).toHaveBeenCalledWith();
  });
});
