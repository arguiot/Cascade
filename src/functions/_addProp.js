_addProp(key, value, s = false, n) {
	let se = this.s
	if (s === true) {
		se = n
	}
	if (this.c.css.hasOwnProperty(se)) {
		this.c.css[se][key] = value
	} else {
		this.c.css[se] = {}
		this.c.css[se][key] = value
	}
}
