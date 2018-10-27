text() {
	const args = [...arguments]

	if (args.length == 1) {
		this._addProp("text", args[0])
	} else if (args.length == 2) {
		this._addProp(`text-${args.shift()}`, args.join(' '))
	} else {
		this._addProp("text", args.join(' '))
	}
	return this
}
