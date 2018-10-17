_addProp(key, value, s = false, n) {
	let se = this.s
	if (s === true) {
		se = n
	}
	const normal = () => {
		if (this.c.css.hasOwnProperty(se)) {
			this.c.css[se][key] = value
		} else {
			this.c.css[se] = {}
			this.c.css[se][key] = value
		}
	}
	
	switch (this.c.mode) {
		case 0:
			normal()
			break;
		case 1:
			if (this.c.media.hasOwnProperty(se)) {
				this.c.media[se][key] = value
			} else {
				this.c.media[se] = {}
				this.c.media[se][key] = value
			}
			break;
		default:
			normal()

	}
}
