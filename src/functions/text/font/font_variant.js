font_variant() {
	const args = [...arguments]
	this._addProp("font-variant", args.join(" "))
	return this
}
