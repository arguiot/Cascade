font_face(name, src, options) {
	if (!src) {
		const url = encodeURI(`https://fonts.googleapis.com/css?family=${name}`)
		fetch(url).catch(er => throw `[Cascade] font-face: ${er}`)
			.then(data => data.text())
			.then(css => {
				if (this.c.css["*font-face*"] != 'undefined') {
					this.c.css["*font-face*"] += css
				} else {
					this.c.css["*font-face*"] = css
				}
			})
	} else {
		let str = `@font-face {font-family: ${name};src: ${src};`
		for (let i of Object.keys(options)) {
			str += `${i}: ${options[i]};`
		}
		str += "}"
		if (this.c.css["*font-face*"] != 'undefined') {
			this.c.css["*font-face*"] += str
		} else {
			this.c.css["*font-face*"] = str
		}
	}
}

fontFace() {
	return this.font_face(...arguments)
}
