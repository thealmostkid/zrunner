var should = require('should');
var EventLoop = require(__dirname + '/../eventLoop.js').EventLoop;

describe('EventLoop', function() {
  var eventLoop = undefined;
  beforeEach(function(){
    eventLoop = new EventLoop();
    eventLoop.stop();
  })

  describe('#start()', function(){
    it('should execute event', function(done){
      eventLoop.scheduleEvent(0, function(){
        done();
      });
      eventLoop.start();
    });

    it('should execute multiple events', function(done){
      var executed = 0;
      var testFunc = function(){
        executed++;
      }
      eventLoop.scheduleEvent(0, testFunc);
      eventLoop.scheduleEvent(0, testFunc);
      eventLoop.start();

      setTimeout(function(){
        executed.should.equal(2);
        done();
      }, 20);
    });

    it('should obey timestamp', function(done){
      this.timeout(150);
      eventLoop.scheduleEvent(500, function(){
        false.should.equal(true);
      });
      eventLoop.start();
      setTimeout(done, 145);
    });
  });

  describe('#scheduleEvent()', function(){
    it('should add event', function(){
      eventLoop.scheduleEvent(0, function(){
        return 0;
      });
      eventLoop.events.length.should.equal(1);
    });
  });
});
