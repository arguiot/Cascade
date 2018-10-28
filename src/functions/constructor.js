constructor() {
	const args = [...arguments]
	const cascade = args.pop()
	const selector = args.join(",")
	this.c = cascade
	this.s = selector
}
