function PlayerMover() {
	this.timer = undefined;
};

PlayerMover.prototype.updatePosition = function() {
};

PlayerMover.prototype.registerKeys = function() {
};

PlayerMover.prototype.startMoving = function() {
	if (this.timer === undefined) {
		this.timer = setInterval(function() {
			this.updatePosition();
			this.drawFunction();
		}, MOVE_INTERVAL_MS);
	}
};

PlayerMover.prototype.stopMoving = function() {
	if (this.timer !== undefined) {
		clearInterval(this.timer);
		this.timer = undefined;
	}
};
