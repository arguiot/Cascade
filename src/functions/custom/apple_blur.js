apple_blur() {
	this._addProp("-webkit-backdrop-filter", "saturate(180%) blur(20px)")
	this._addProp("backdrop-filter", "saturate(180%) blur(20px)")
	this.background(255, 255, 255, 0.7)
	return this
}
