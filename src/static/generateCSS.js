Cascade.generateCSS = function() {
	const css = this.css

	let str = ""
	for (let key of Object.keys(css)) {
		str += `${key} {`

		const obj = css[key]

		for (let name of Object.keys(obj)) {
			if (name == "externalCSS") {
				str += obj[name]
			} else {
				str += `${name}: ${obj[name]};`
			}
		}

		str += "}"
	}

	return str
}
