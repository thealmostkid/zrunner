var should = require('should');
var Player = require(__dirname + '/../player.js').Player;

describe('Player', function(){
  var player = undefined;
  var publisher = {};
  publisher.publish = function(){
  }

  beforeEach(function(){
    player = new Player(publisher);
  });

  describe('#ctor', function(){
    it('should set default position', function(){
      player.X.should.equal(-1);
      player.Y.should.equal(-1);
    });

    it('should throw if publisher is invalid', function(){
      (function(){
        new Player();
      }).should.throwError();
      (function(){
        var publisher = {};
        new Player(publisher);
      }).should.throwError();
    });
  });

  describe('#setPosition', function(){
    it('should change the player position', function(){
      player.setPosition(2, 3);
      player.X.should.equal(2);
      player.Y.should.equal(3);
    });

    it('should publish position change', function(done){
      var publisher = {};
      publisher.publish = function(){
        done();
      }
      var playerPub = new Player(publisher);
      playerPub.setPosition(2, 3);
    });
  });
});
