function PlayerMover(updateFunc) {
	this.updateFunc = updateFunc;
	this.timer = undefined;
};

PlayerMover.prototype.updatePosition = function() {
};

PlayerMover.prototype.startMoving = function() {
	var update = this.updateFunc;
	if (this.timer === undefined) {
		this.timer = setInterval(function() {
			update();
		}, MOVE_INTERVAL_MS);
	}
};

PlayerMover.prototype.stopMoving = function() {
	if (this.timer !== undefined) {
		clearInterval(this.timer);
		this.timer = undefined;
	}
};
