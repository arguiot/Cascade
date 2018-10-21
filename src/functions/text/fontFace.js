font_face(name, src, options) {
	if (!src) {
		const url = encodeURI(`https://fonts.googleapis.com/css?family=${name}`)
		const request = require('sync-request');
		const res = request("GET", url)
		if (res.statusCode != 200) {
			throw "[Cascade] font-face: couldn't find the font on Google Fonts"
		}
		const css = res.getBody().toString().replace(/(\r\n\t|\n|\r\t)/gm,"")
		if (typeof this.c.css["*font-face*"] != 'undefined') {
			this.c.css["*font-face*"] += css
		} else {
			this.c.css["*font-face*"] = css
		}
	} else {
		let str = `@font-face {font-family: ${name};src: ${src};`
		if (options) {
			for (let i of Object.keys(options)) {
				str += `${i}: ${options[i]};`
			}
		}
		str += "}"
		if (typeof this.c.css["*font-face*"] != 'undefined') {
			this.c.css["*font-face*"] += str
		} else {
			this.c.css["*font-face*"] = str
		}
	}
}
