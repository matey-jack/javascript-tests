'use strict';

const expect = require('chai').expect;

function value(v = 100) {
    return v;
}

describe('javascript calling convention', function () {
    it('undefined triggers default', function () {
        let obj = {};
        expect(value(obj.nofield)).to.equal(100);        
    })
})
