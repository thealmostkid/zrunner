var should = require('should');
//var assert = require('assert');
//assert.equal(testValue, myObj.firstMethod());
var MyObject = require(__dirname + '/../myObject.js').MyObject;

describe('MyObject', function() {
	describe('firstMethod', function() {
		it('should return value', function() {
			var testValue = 5;
			var myObj = new MyObject(testValue);
			myObj.firstMethod().should.equal(testValue);
		});
	});
});
