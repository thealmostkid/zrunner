var should = require('should');
var Game = require(__dirname + '/../Game.js').Game;

describe('Game', function(){
  var game = undefined;

  function noAnimate(){
  }

  var noSimulation = {
    processEvents: function(eventList) { },
    simulate: function() { }
  }

  beforeEach(function(){
    game = new Game(noAnimate, noSimulation);
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
    var mockedGame = undefined;
    var animated = 0;

    function countAnimate(){
      animated = animated + 1;
    }

    var mockSimulation = {
      events: [],
      simulated: 0,
      processEvents: function(eventList) {
        this.events = eventList;
      },
      simulate: function() {
        this.simulated = this.simulated + 1;
      }
    }

    beforeEach(function(){
      mockGame = new Game(countAnimate, mockSimulation);
    });

    it('should send events to simulation', function(){
      mockSimulation.events.length.should.equal(0);
      mockGame.enqueueEvent(1);
      mockGame.gameLoop();
      mockSimulation.events.length.should.equal(1);
    });

    it('should clear events', function(){
      mockGame.enqueueEvent(1);
      mockGame.gameLoop();
      mockGame.pendingEvents.length.should.equal(0);
    });

    it('should simulate', function(){
      var simulationStart = mockSimulation.simulated;
      mockGame.gameLoop();
      mockSimulation.simulated.should.equal(simulationStart + 1);
    });

    it('should update interface', function(){
      var interfaceStart = animated;
      mockGame.gameLoop();
      animated.should.equal(interfaceStart + 1);
    });

    it('should render', function(){
      fail();
    });
  });

});
