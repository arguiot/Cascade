outline() {
	const args = [...arguments]
	this._addProp("outline", args.join(' '))
	return this
}
