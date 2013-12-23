function Repeatable(updateFunc, interval) {
	this.updateFunc = updateFunc;
	this.interval = interval;
	this.timer = undefined;
};

Repeatable.prototype.start = function() {
	var update = this.updateFunc;
	var period = this.interval;
	if (this.timer === undefined) {
		this.timer = setInterval(function() {
			update();
		}, period);
	}
};

Repeatable.prototype.stop = function() {
	if (this.timer !== undefined) {
		clearInterval(this.timer);
		this.timer = undefined;
	}
};
