// var assert = require('assert');
var should = require('should');

var utils = require('../client/lib/utils');

describe('utils', function() {
  describe('#getCookie()', function() {
    it('should return value when the item exist', function() {
      should.equal('', utils.getCookie('prop'));
    });
  });
});

describe('utils', function() {
  describe('#setCookie()', function() {
    it('should return true when the cookie is setted', function() {
      should.equal(true, utils.setCookie('name','libin', { path: '/'}));
    });
  });
});

describe('utils', function() {
  describe('#Base64()', function() {
    it('should return right decode value', function() {
      should.equal('elevenbeansf2e@gmail.com', utils.base64.decode('ZWxldmVuYmVhbnNmMmVAZ21haWwuY29t')); // email
    });
    it('should return right decode value', function() {
      should.equal('elevenBeans', utils.base64.decode('ZWxldmVuQmVhbnM=')); // name
    });
    it('should return decode value', function() {
      should.equal('6982813', utils.base64.decode('Njk4MjgxMw==')); // name
    });
    // Njk4MjgxMw%3D%3D
    it('should return a string', function() {
      // should.equal(true, utils.base64.encode('elevenBeans'));
      utils.base64.encode('elevenBeans').should.be.String();
    });
  });
});

describe('utils', function() {
  describe('#getDevice()', function() {
    it('should return bool', function() {
      should.equal(false, utils.getDevice('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36').mobile);
      should.equal(true, utils.getDevice('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1').mobile);
      should.equal(true, utils.getDevice('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1').ios);
      should.equal(true, utils.getDevice('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1').iPhone);
    });
  });
  describe('#formatPercentage()', function() {
    it('should return percentageNum when the value is digital', function() {
      should.equal(33.3, utils.formatPercentage(0.3333));
      should.equal(3.3, utils.formatPercentage(0.0333));
      should.equal(25, utils.formatPercentage(0.25));
      should.equal(100, utils.formatPercentage(1));
    });
  });
  describe('#urlType()', function() {
    it('should return bool', function() {
      should.equal(true, utils.getPageType('/list/elevenBeans').specialListPage);
      should.equal(true, utils.getPageType('/list').listPage);
      should.equal(true, utils.getPageType('/detail/1494926562227').detailPage);
      should.equal(false, utils.getPageType('/detail2/1494926562227').detailPage);
      should.equal(true, utils.getPageType('/detail').detailPage);
      should.equal(true, utils.getPageType('/').homePage);
      should.equal(true, utils.getPageType('/new').newPage);
      should.equal(false, utils.getPageType('/list1/elevenBeans').specialListPage);
      should.equal(true, utils.getPageType('/list/124').specialListPage);
      should.equal(false, utils.getPageType('/detail/eee').detailPage);
      should.equal(false, utils.getPageType('/det').detailPage);
      should.equal(true, utils.getPageType('').homePage);
      should.equal(false, utils.getPageType('/new1').newPage);
    });
  });
});
