function Actions() {
}

Actions.MAP_CHANGED = 1;
Actions.PLAYER_CHANGED = 2;

if (typeof module != 'undefined') {
  module.exports.Actions = Actions;
}
