var should = require('should');
var StaticObject = require(__dirname + "/../staticObject.js").StaticObject;

describe('StaticObject', function(){
  describe('#ctor', function(){
    it('should set the type', function(){
      var testType = StaticObject.WEST_WALL;
      var so = new StaticObject(testType);
      so.type.should.equal(testType);
    });
  });
});
