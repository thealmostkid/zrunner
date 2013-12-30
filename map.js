function Map(n, m, defaultObject) {
  this.N = n;
  this.M = m;
  this.layout = new Array(this.N);
  for (var i = 0; i < this.N; i++) {
    this.layout[i] = new Array(this.M);
    for (var j = 0; j < this.M; j++) {
      this.layout[i][j] = defaultObject;
    }
  }
}

Map.prototype.isValidPosition = function(x, y) {
  if (x < 0 ||
      x >= this.N ||
      y < 0 ||
      y >= this.M) {
    return false;
  }
  return true;
}

Map.prototype.addStaticObject = function(x, y, object) {
  if (!this.isValidPosition(x, y)) {
    throw new RangeError('Invalid coordinate');
  }
  this.layout[x][y] = object;
}

if (typeof module != 'undefined') {
  module.exports.Map = Map;
}
