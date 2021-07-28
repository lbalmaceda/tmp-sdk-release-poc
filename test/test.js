var suma = require('../index');
var assert = require('assert');

describe('suma library', function() {
  describe('should add values correctly', function() {
    it('should add positive values', function() {
      assert.strictEqual(suma(2, 4), 6);
    });
    it('should add negative values', function() {
      assert.strictEqual(suma(-2, -4), -6);
    });
  });
});