Cascade.generateJS = function() {
	const js = this.js
	let methods = []
	for (let o of js) {
		methods.push({
			s: o.s,
			f: o.f.toString()
		})
	}
	const json = JSON.stringify(methods)
	console.log(json)
	const model =
	`
class CascadeLoadScripts {
constructor() {
	this.loaded()
}
loaded() {
	document.addEventListener("DOMContentLoaded", e => {
		runScripts()
	})
}
get scripts() {
	return ${json}
}
runScripts() {
	for (let o of this.scripts) {
		try {
			const s = o.s
			const f = eval(o.f)

			const el = document.querySelector(s)
			f(el)
		} catch (e) {
			console.error(e)
		}
	}
}
}

const CascadeScripts = new CascadeLoadScripts()
	`
	return model
}
