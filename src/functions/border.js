border() {
	const args = [...arguments]

	if (args.length == 1) {
		this._addProp("border", args[0])
	} else if (args.length == 2) {
		this._addProp(`border-${args.shift()}`, args.join(' '))
	} else {
		this._addProp("border", args.join(' '))
	}
	return this
}
radius(value) {
	return this.border("radius", value)
}
