animation() {
	const args = [...arguments]
	this._addProp("animation", args.join(" "))
	return this
}
