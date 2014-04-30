var should = require('should');
var Controller = require(__dirname + '/../controller.js').Controller;

describe('Controller', function(){
  var controller = undefined;
  beforeEach(function(){
    controller = new Controller();
  });

  describe('#subscribe()', function(){
    it('should add a subscriber', function(){
      controller.subscribe(function(action){});
      controller.subscribers.length.should.equal(1);
    });
  });

  describe('#publish()', function(){
    it('should send an action', function(){
      var received = false;
      controller.subscribe(function(){
        received = true;
      });
      controller.publish();
      received.should.be.true;
    });

    it('should pass action', function(){
      var received = 0;
      var testValue = 1;
      controller.subscribe(function(action){
        received = action;
      });
      controller.publish(testValue);
      received.should.equal(testValue);
    });

    it('should pass many parameters', function(){
      var received = []
      controller.subscribe(function(){
        received = Array.prototype.slice.call(arguments);
      });
      controller.publish(1, 2);
      received.should.eql([1, 2]);
    });
  });
});
