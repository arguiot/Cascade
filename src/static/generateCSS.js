Cascade.generateCSS = function() {
	const css = this.css

	let str = ""
	for (let key of Object.keys(css)) {
		if (name == "*media*") {
			for (let query of obj["*media*"]) {
				const selector = query.selector
				const mediaCSS = query.css

				str += `@media ${selector} {`
				for (let i of Object.keys(mediaCSS)) {
					str + renderCSS(i, mediaCSS[i])
				}
				str += "}"
			}
		} else {
			str += renderCSS(key, css[key])
		}
	}

	return str

	function renderCSS(key, obj) {
		let str = `${key} {`

		for (let name of Object.keys(obj)) {
			if (name == "externalCSS") {
				str += obj[name]
			} else {
				str += `${name}: ${obj[name]};`
			}
		}
		str += "}"
		return str
	}
}
