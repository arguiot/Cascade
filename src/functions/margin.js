margin() {
	const args = [...arguments]
	const list = ["top", "right", "left", "bottom"]
	if (args.length == 1) {
		this._addProp("margin", args[0])
	} else if (args.length == 2 && list.includes(args[1])) {
		this._addProp(`margin-${args.shift()}`, args.join(' '))
	} else {
		this._addProp("margin", args.join(' '))
	}
	return this
}
