onHover(f) {
	const s = `${this.s}`
	this.s = `${this.s}:hover`
	f(this)
	this.s = s
	return this
}
