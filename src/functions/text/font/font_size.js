font_size(opt) {
	if (typeof opt == "number") {
		this._addProp("font-size", `${opt}px`)
		return this
	}
	this._addProp("font-size", opt)
	return this
}
