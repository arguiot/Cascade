Cascade.mediaQuery = function(selector, css) {
	const array = {
		selector: selector,
		css: css
	}
	if (this.css.hasOwnProperty("*media*")) {
		this.css["*media*"] = [array]
	} else {
		this.css["*media*"].push(array)
	}
}
