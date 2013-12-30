function StaticObject(type) {
  this.type = type;
}

StaticObject.EMPTY = 0;
StaticObject.FLOOR = 1;
StaticObject.NORTH_WALL = 2;
StaticObject.EAST_WALL = 3;
StaticObject.SOUTH_WALL = 4;
StaticObject.WEST_WALL = 5;
StaticObject.CORNER = 6;
StaticObject.DOOR = 7;

if (typeof module != 'undefined') {
  module.exports.StaticObject = StaticObject;
}
