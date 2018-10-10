mouse(prop) {
	this._addProp("cursor", prop)
	return this
}
cursor(prop) {
	return this.mouse(prop)
}
