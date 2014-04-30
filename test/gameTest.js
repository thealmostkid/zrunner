var should = require('should');
var Game = require(__dirname + '/../Game.js').Game;

describe('Game', function(){
  var game = undefined;

  function noAnimate(){
  }

  var mockSimulation = {
    processEvents: function(eventList) { },
    simulate: function() { }
  }

  beforeEach(function(){
    game = new Game(noAnimate, mockSimulation);
  });

  describe('#enqueueEvent()', function(){
    it('should add an event', function(){
      game.enqueueEvent(10);
      game.pendingEvents.length.should.equal(1);
    });
  });

  describe('#dequeueEvent()', function(){
    it('should add an event', function(){
      var origEvent = 10;
      game.enqueueEvent(origEvent);
      game.pendingEvents.length.should.equal(1);
      var newEvent = game.dequeueEvent();
      game.pendingEvents.length.should.equal(0);
      newEvent.should.equal(origEvent);
    });
  });

  describe('#getPendingEvents()', function(){
    it('should return all events', function(){
      game.enqueueEvent(10);
      game.enqueueEvent(9);
      var events = game.getPendingEvents();
      events.length.should.equal(2);
    });

    it('should return events in order', function(){
      var firstEvent = 10;
      var secondEvent = 9;
      game.enqueueEvent(firstEvent);
      game.enqueueEvent(secondEvent);
      var events = game.getPendingEvents();
      events[0].should.equal(firstEvent);
      events[1].should.equal(secondEvent);
    });
  });

  describe('#gameLoop', function(){
    it('should send events to simulation', function(){
      fail();
    });

    it('should clear events', function(){
      fail();
    });

    it('should simulate', function(){
      fail();
    });

    it('should update interface', function(){
      fail();
    });

    it('should render', function(){
      fail();
    });
  });

});
