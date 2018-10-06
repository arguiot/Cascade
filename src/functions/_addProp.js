_addProp(key, value, s = false) {
	let se = this.s
	if (s === true) {
		se = s
	}
	if (this.c.css.hasOwnProperty(se)) {
		this.c.css[se][key] = value
	} else {
		this.c.css[se] = {}
		this.c.css[se][key] = value
	}
}
