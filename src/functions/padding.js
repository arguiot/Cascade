padding() {
	const args = [...arguments]

	if (args.length == 1) {
		this._addProp("padding", args[0])
	} else if (args.length == 2) {
		this._addProp(`padding-${args.shift()}`, args.join(' '))
	} else {
		this._addProp("padding", args.join(' '))
	}
	return this
}
