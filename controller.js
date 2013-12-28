function Controller() {
  this.subscribers = [];
};

Controller.prototype.publish = function(action) {
  var args = Array.prototype.slice.call(arguments);
  this.subscribers.forEach(function(element, index, array){
    element.apply(this, args);
  });
};

Controller.prototype.subscribe = function(notify) {
  this.subscribers.push(notify);
};

if (typeof module != 'undefined') {
  module.exports.Controller = Controller;
}
