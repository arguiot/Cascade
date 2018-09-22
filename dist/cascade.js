/*

 Cascade - An innovative CSS preprocessor made of JavaScript

 Copyright © Arthur Guiot 2018

*/

const Cascade = function() {
	// Call the constructor
	return Cascade.init(...arguments)
}

// Static methods

Cascade.init = function(selector) {
	class cascade {
		_addProp(key, value) {
			if (this.c.css.hasOwnProperty(this.s)) {
				this.c.css[this.s][key] = value
			} else {
				this.c.css[this.s] = {}
				this.c.css[this.s][key] = value
			}
		}
		appendCSS(txt) {
			this._addProp("externalCSS", txt)
		}
		background() {
			const args = [...arguments]
		
			if (args.length == 1 && typeof args[0] == "string") {
				// Check if color or url
				function ValidURL(str) {
					var pattern = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
					return pattern.test(str)
				}
		
				const isColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(args[0])
				const isURL = ValidURL(args[0])
		
				if (isColor && !isURL) {
					// Color
					this._addProp("background-color", args[0])
				} else if (isURL && !isColor) {
					// URL
					this._addProp("background-image", args[0])
				} else {
					throw "[Cascade] Background: Wrong arguments"
				}
			} else if (args.length == 2) {
				// background property
				this._addProp(`background-${args[0]}`, args[1])
			} else if (args.length == 3) {
				// RGB
				this._addProp("background-color", `rgb(${args[0]}, ${args[1]}, ${args[2]})`)
			} else if (args.length == 4) {
				// RGBa
				this._addProp("background-color", `rgba(${args[0]}, ${args[1]}, ${args[2]}, ${args[3]})`)
			} else {
				throw "[Cascade] Background: Wrong arguments"
			}
		
			return this
		}
		constructor(selector, cascade) {
			this.c = cascade
			this.s = selector
		}
	}
	return new cascade(selector, Cascade)
}
Cascade.css = {}
Cascade.generateCSS = function() {
	const css = this.css

	let str = ""
	for (let key of Object.keys(css)) {
		str += `${key} {`

		const obj = css[key]

		for (let name of Object.keys(obj)) {
			if (name == "externalCSS") {
				str += obj[name]
			} else {
				str += `${name}: ${obj[name]};`
			}
		}

		str += "}"
	}

	return str
}

// Browserify / Node.js
if (typeof define === "function" && define.amd) {
  define(() => Cascade);
  // CommonJS and Node.js module support.
} else if (typeof exports !== "undefined") {
  // Support Node.js specific `module.exports` (which can be a function)
  if (typeof module !== "undefined" && module.exports) {
    exports = module.exports = Cascade;
  }
  // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
  exports.Cascade = Cascade;
} else if (typeof global !== "undefined") {
  global.Cascade = Cascade;
}