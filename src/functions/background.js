background() {
	const args = [...arguments]

	if (args.length == 1 && typeof args[0] == "string") {
		// Check if color or url
		function ValidURL(str) {
			var pattern = new RegExp('^(https?:\/\/)?' + // protocol
				'((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|' + // domain name
				'((\d{1,3}\.){3}\d{1,3}))' + // OR ip (v4) address
				'(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
				'(\?[;&a-z\d%_.~+=-]*)?' + // query string
				'(\#[-a-z\d_]*)?$', 'i'); // fragment locater
			return pattern.test(str)
		}

		const isColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(args[0])
		const isURL = ValidURL(args[0])

		if (isColor && !isURL) {
			// Color
			this._addProp("background-color", args[0])
		} else if (isURL && !isColor) {
			// URL
			this._addProp("background-image", args[0])
		} else {
			throw "[Cascade] Background: Wrong arguments"
		}
	} else if (args.length == 2) {
		// background property
		this._addProp(`background-${args[0]}`, args[1])
	} else if (args.length == 3) {
		// RGB
		this._addProp("background-color", `rgb(${args[0]}, ${args[1]}, ${args[2]})`)
	} else if (args.length == 4) {
		// RGBa
		this._addProp("background-color", `rgba(${args[0]}, ${args[1]}, ${args[2]}, ${args[3]})`)
	} else {
		throw "[Cascade] Background: Wrong arguments"
	}

	return this
}
