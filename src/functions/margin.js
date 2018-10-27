margin() {
	const args = [...arguments]

	if (args.length == 1) {
		this._addProp("margin", args[0])
	} else if (args.length == 2) {
		this._addProp(`margin-${args.shift()}`, args.join(' '))
	} else {
		this._addProp("margin", args.join(' '))
	}
	return this
}
