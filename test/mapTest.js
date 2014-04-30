var should = require('should');
var Map = require(__dirname + '/../map.js').Map;

describe('Map', function(){
  describe('#ctor', function(){
    it('should create empty layout', function(){
      var n = 2;
      var m = 3;
      var map = new Map(n, m);
      map.layout.length.should.equal(n);
      for (var i = 0; i < n; i++) {
        map.layout[i].length.should.equal(m);
      }
    });

    it('should set dimensions', function(){
      var n = 1;
      var m = 3;
      var map = new Map(n, m);
      map.N.should.equal(n);
      map.M.should.equal(m);
    });

    it('should fill with default object', function(){
      var floorObject = {};
      floorObject['type'] = 5;
      var map = new Map(1, 1, floorObject);
      map.layout[0][0].should.eql(floorObject);
    });
  });

  describe('#isValidPosition', function(){
    var map = undefined;
    var n = 2;
    var m = 2;
    beforeEach(function(){
      map = new Map(n, m);
    });

    it('should be false for negative values', function(){
      map.isValidPosition(-1, 0).should.be.false;
      map.isValidPosition(0, -1).should.be.false;
    });

    it('should be false for large values', function(){
      map.isValidPosition(n, 0).should.be.false;
      map.isValidPosition(0, m).should.be.false;
    });

    it('should be true for valid values', function(){
      map.isValidPosition(0, 0).should.be.true;
    });

  });

  describe('#addStaticObject', function(){
    var map = undefined;
    var n = 2;
    var m = 2;
    var defaultObject = {};
    defaultObject.type = 0;
    beforeEach(function(){
      map = new Map(n, m, defaultObject);
    });

    it('should populate map with correct object', function(){
      var newObject = {};
      newObject.type = 1;
      map.addStaticObject(0, 0, newObject);
      map.layout[0][0].should.eql(newObject);
    });

    it('should throw error on invalid positon', function(){
      (function(){
        map.addStaticObject(n, 0, {});
      }).should.throwError();
      (function(){
        map.addStaticObject(0, m, {});
      }).should.throwError();
      (function(){
        map.addStaticObject(-1, 0, {});
      }).should.throwError();
      (function(){
        map.addStaticObject(0, -1, {});
      }).should.throwError();
      (function(){
        map.addStaticObject(n * 3, m * 3, {});
      }).should.throwError();
    });
  });
});
