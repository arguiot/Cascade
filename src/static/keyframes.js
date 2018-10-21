Cascade.keyframesGen = function(selector, css) {
	const array = {
		name: selector,
		timeline: css
	}
	if (this.css.hasOwnProperty("*keyframe*") || this.css["*keyframe*"] != "undefined") {
		this.css["*keyframe*"] = new Array(array)
	} else {
		console.log(this.css["*keyframe*"])
		this.css["*keyframe*"].push(array)
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
