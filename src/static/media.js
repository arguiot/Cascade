Cascade.mediaQuery = function(selector, css) {
	const array = {
		selector: selector,
		css: css
	}
	if (this.css.hasOwnProperty("*media*") || this.css["*media*"] != "undefined") {
		this.css["*media*"] = new Array(array)
	} else {
		console.log(this.css["*media*"])
		this.css["*media*"].push(array)
	}
}
Cascade.media = function(selector, callback) {
	this.mode = 1
	this.medias = {}
	callback(this)
	this.mode = 0
	this.mediaQuery(selector, this.media)
}
