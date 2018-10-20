Cascade.keyframesGen = function(selector, css) {
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
Cascade.keyframes = function(selector, callback) {
	this.mode = 2
	this.keyframe = {}
	callback(this)
	this.mode = 0
	this.mediaQuery(selector, this.media)
}
//= keys
