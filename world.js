function World(defaultMap) {
  this.defaultMap = defaultMap;
  this.map = this.defaultMap;
  this.players = [];
}

World.prototype.setCurrentMap = function(newMap) {
  if (!newMap) {
    throw new TypeError('Invalid Map');
  }
  this.map = newMap;
}

World.prototype.addPlayer = function(newPlayer) {
  if (!newPlayer) {
    throw new TypeError('Invalid Player');
  }
  this.players.push(newPlayer);
}

if (typeof module != 'undefined') {
  module.exports.World = World;
}
