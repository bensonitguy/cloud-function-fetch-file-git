var assert = require('assert');

describe('Array', function() {
  var jsonvalidator = require('../json-validation');
  describe('validating jsonvalidator', function() {
    it('should return true if valid JSON ', function() {
      var json = { name : "cloudfunction" };
      
      assert.equal(true, jsonvalidator(JSON.stringify(json)));
    });

    it('should return false if invalid JSON ', function() {
      var json = { name : "cloudfunction" };
      
      assert.equal(false, jsonvalidator(json));
    });

    it('valid destination',function(){
      var valid_destination = '/src/hello/package.json';
      var validarry = [];
      validarry = valid_destination.split('/');
      var count = validarry.length;
      console.log(count);
      assert.equal(validarry[count - 1],'package.json');
    });

  });
});

describe('getFileNameToUpload',function(){

  
});