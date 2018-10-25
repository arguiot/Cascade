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
		case 1: // media queries
			if (this.c.media.hasOwnProperty(se)) {
				this.c.media[se][key] = value
			} else {
				this.c.media[se] = {}
				this.c.media[se][key] = value
			}
			break;
		case 2: // keyframes
			if (this.c.keyframe.hasOwnProperty(se)) {
				this.c.keyframe[se][key] = value
			} else {
				this.c.keyframe[se] = {}
				this.c.keyframe[se][key] = value
			}
			break;
		default:
			normal()

	}
}
css() {
	this._addProp(...arguments)
	return this
}
