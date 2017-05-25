// var assert = require('assert');
var should = require("should"); 

var utils = require('../client/lib/utils');

// describe('utils', function() {
//   describe('#getCookie()', function() {
//     it('should return value when the value exist', function() {
//       assert.equal(33.3, utils.getCookie(0.3333));
//     });
//   });
// });

// describe('utils', function() {
//   describe('#setCookie()', function() {
//     it('should return percentageNum when the value is digital', function() {
//       assert.equal(33.3, utils.setCookie(0.3333));
//     });
//   });
// });

describe('utils', function() {
  describe('#formatPercentage()', function() {
    it('should return percentageNum when the value is digital', function() {
      should.equal(33.3, utils.formatPercentage(0.3333));
      should.equal(3.3, utils.formatPercentage(0.0333));
      should.equal(25, utils.formatPercentage(0.25));
      should.equal(100, utils.formatPercentage(1));
    });
  });
});