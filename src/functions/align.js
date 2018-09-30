align(param) {
	switch (param) {
		case "left":
			this._addProp("postion", "absolute")
			this._addProp("left", "0")
			break;
		case "center":
			this.center()
			break;
		case "right":
			this._addProp("postion", "absolute")
			this._addProp("right", "0")
			break;
		default:
	}
	return this
}
