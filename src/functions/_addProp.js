_addProp(key, value) {
	if (this.c.css.hasOwnProperty(this.s)) {
		this.c.css[this.s][key] = value
	} else {
		this.c.css[this.s] = {}
		this.c.css[this.s][key] = value
	}
}
