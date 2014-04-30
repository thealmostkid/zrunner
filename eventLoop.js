function EventLoop(loopPeriodMS) {
  this.events = [];
  this.timer = undefined;
  this.periodMS = loopPeriodMS;
  this.totalIterations = 0;
};

EventLoop.prototype.update = function() {
  this.totalIterations++;
  var iterations = this.totalIterations;
  this.events.forEach(function(element, index, array){
    if (element.iterations <= iterations) {
      element.callback();
    }
  });
  this.events = this.events.filter(function(element){
    return element.iterations > iterations;
  });
}

EventLoop.prototype.start = function() {
  if (!this.timer) {
    function callback(eventLoop){
      return (function(){
        eventLoop.update();
      });
    }
    this.timer = setInterval(callback(this), this.periodMS);
  }
};

EventLoop.prototype.stop = function() {
  if (this.timer) {
    clearInterval(this.timer);
    this.timer = undefined;
  }
};

EventLoop.prototype.scheduleEvent = function(afterMS, callback) {
  var newEvent = {}
  newEvent['iterations'] = this.totalIterations + Math.ceil(afterMS / this.periodMS);
  newEvent['callback'] = callback;
  this.events.push(newEvent);
}

if (typeof module != 'undefined') {
  module.exports.EventLoop = EventLoop;
}
