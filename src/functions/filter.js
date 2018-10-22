filter() {
	const args = [...arguments]
	if (args.length % 2 != 0) {
		this._addProp("filter", args.join(' '))
		return this
	}
	let array = []
	for (let i = 0; i < args.length; i += 2) {
		const func = args[i]
		const val = args[i + 1]
		array.push(`${func}(${val})`)
	}
	this._addProp("filter", array.join(' '))
	return this
}
