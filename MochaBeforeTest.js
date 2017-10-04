'use strict';

const expect = require('chai').expect;
var Promise = require("bluebird");

var global = 100;

before(async () =>
  Promise.delay(1000).then(() => { global = 200; })
)

describe('mocha', function () {
  it('waits for Promises returned by before functions', () => {
    expect(global).to.equal(200);
  })
});
