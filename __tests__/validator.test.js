'use strict';

const { default: test } = require('node:test');
const validator = require('../src/middleware/validator');

describe('Validator Middleware', () => {
  test('Works as expected', async () => {

    const req = {
      query: {
        name: 'hello',
      },
    };
    const res = {};
    const next = jest.fn();
    validator(req, res, next);
    expect(req.query.name).toBeTruthy();
    expect(next).toHaveBeenCalledWith();
  });
  test('Fails as expected', async () => {

    const req = {
      query: {},
    };
    const res = {};
    const next = jest.fn();
    validator(req, res, next);
    expect(req.query.name).toBeFalsy();
    expect(next).toHaveBeenCalledWith('Name required');
  });
});

