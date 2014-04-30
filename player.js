if (typeof module != 'undefined') {
  var Actions = require(__dirname + '/actions.js').Actions;
}

function Player(publisher) {
  if (!publisher || typeof publisher['publish'] !== 'function') {
    throw new TypeError('Invalid Publisher');
  }
  this.publisher = publisher;
  this.X = -1;
  this.Y = -1;
}

Player.prototype.setPosition = function(x, y) {
  this.X = x;
  this.Y = y;
  this.publisher.publish(Actions.PLAYER_CHANGED);
}

if (typeof module != 'undefined') {
  module.exports.Player = Player;
}
