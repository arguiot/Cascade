border() {
	const args = [...arguments]

	if (args.length == 1) {
		this._addProp("border", args[0])
	} else if (args.length == 2) {
		this._addProp(`border-${args[0]}`, args[1])
	} else {
		throw "[Cascade] Border: wrong arguments"
	}
	return this
}
