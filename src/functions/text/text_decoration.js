text_decoration() {
	const args = [...arguments]
	this._addProp("text-decoration", args.join(" "))
	return this
}
