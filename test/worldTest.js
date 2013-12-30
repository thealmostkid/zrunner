var should = require('should');
var Map = require(__dirname + '/../map.js').Map;
var Player = require(__dirname + '/../player.js').Player;
var World = require(__dirname + '/../world.js').World;

describe('World', function(){
  var world = undefined;
  beforeEach(function(){
    world = new World(new Map(10, 10));
  });

  describe('#ctor', function(){
    it('should set map to default map', function(){
      world.map.should.eql(world.defaultMap);
    });

    it('should create a valid default map', function(){
      world.defaultMap.should.be.ok;
    });

    it('should have no players', function(){
      world.players.length.should.equal(0);
    });
  });

  describe('#setCurrentMap', function(){
    it('should throw type error on invalid param', function(){
      (function(){
        world.setCurrentMap(undefined);
      }).should.throwError();
      (function(){
        world.setCurrentMap(null);
      }).should.throwError();
    });

    it('should change map', function(){
      var newMap = new Map(1, 1, {});
      world.setCurrentMap(newMap);
      world.map.should.eql(newMap);
    });
  });

  describe('#addPlayer', function(){
    it('should add the player to the existing set', function(){
      world.addPlayer({});
      world.players.length.should.equal(1);
    });

    it('should throw type error on invalid param', function(){
      (function(){
        world.addPlayer(undefined);
      }).should.throwError();
      (function(){
        world.addPlayer(null);
      }).should.throwError();
    });
  });
});
