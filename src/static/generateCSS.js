Cascade.generateCSS = function() {
	const css = this.css

	let str = ""
	for (let key of Object.keys(css)) {
		if (key == "*media*") {
			for (let query of css["*media*"]) {
				const selector = query.selector
				const mediaCSS = query.css

				str += `@media ${selector} {`
				for (let i of Object.keys(mediaCSS)) {
					str += renderCSS(i, mediaCSS[i])
				}
				str += "}"
			}
		} else if (key == "*keyframe*") {
			for (let keyframe of css["*keyframe*"]) {
				const name = keyframe.name
				const points = keyframe.timeline

				str += `@keyframes ${name} {`
				for (let i of Object.keys(points)) {
					if (isNaN(parseInt(i))) {
						str += renderCSS(i, points[i])
					} else {
						str += renderCSS(`${i}%`, points[i])
					}

				}
				str += "}"
			}
		} else if (key == "*font-face*") {
			str += css["*font-face*"] // paste it as it is
		} else {
			str += renderCSS(key, css[key])
		}
	}

	return str

	function renderCSS(key, obj) {
		let str = `${key} {`

		for (let name of Object.keys(obj)) {
			if (name == "*externalCSS*") {
				str += obj[name]
			} else {
				str += `${name}: ${obj[name]};`
			}
		}
		str += "}"
		return str
	}
}
