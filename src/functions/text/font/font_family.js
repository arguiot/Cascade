font_family() {
	const args = [...arguments]
	const gen = this.generic_fonts
	let array = []
	for (let font of args) {
		if (gen.includes(font)) {
			array.push(font)
		} else {
			array.push(`"${font}"`)
		}
	}
	this._addProp("font-family", array.join(", "))
	return this
}
