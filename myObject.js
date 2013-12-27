function MyObject(value) {
	this.value = value;
}

MyObject.prototype.firstMethod = function () {
	return this.value;
}

if(typeof module != 'undefined') {
	module.exports.MyObject = MyObject;
}
