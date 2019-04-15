var assert = require('assert');

describe('Array', function() {
  var jsonvalidator = require('../JsonValidation');
  describe('validating jsonvalidator', function() {
    it('should return true if valid JSON ', function() {
      var json = { name : "cloudfunction" };
      
      assert.equal(true, jsonvalidator(JSON.stringify(json)));
    });

    it('should return false if invalid JSON ', function() {
      var json = { name : "cloudfunction" };
      
      assert.equal(false, jsonvalidator(json));
    });

  });
});