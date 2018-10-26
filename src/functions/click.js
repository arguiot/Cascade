click(f) {
	const func = new Function("el", `document.querySelector('${this.s}').addEventListener(\"click\", () => {const f = ${f.toString()};f(el)})`)
	this._addFunc(func)
	return this
}
