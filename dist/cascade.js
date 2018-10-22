/*

 Cascade - An innovative CSS preprocessor made of JavaScript

 Copyright © Arthur Guiot 2018

*/

const Cascade = function() {
	// Call the constructor
	return Cascade.init(...arguments)
}

// Static methods

Cascade.funcClass = function() {
	return class {
		_addFunc(f) {
			const o = {
				s: this.s,
				f: f
			}
			this.c.js.push(o)
		}
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
		align(param) {
			switch (param) {
				case "left":
					this._addProp("postion", "absolute")
					this._addProp("left", "0")
					break;
				case "center":
					this.center()
					break;
				case "right":
					this._addProp("postion", "absolute")
					this._addProp("right", "0")
					break;
				default:
			}
			return this
		}
		appendCSS(txt) {
			this._addProp("*externalCSS*", txt)
			return this
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
					this._addProp("background", args[0])
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
		border() {
			const args = [...arguments]
		
			if (args.length == 1) {
				this._addProp("border", args[0])
			} else if (args.length == 2) {
				this._addProp(`border-${args[0]}`, args[1])
			} else {
				throw "[Cascade] Border: wrong arguments"
			}
			return this
		}
		center(param = "horizontally") {
		
			const horizontally = () => {
				this._addProp("margin", "0 auto");
			}
		
			const vertically = () => {
				this._addFunc(el => {
					const parent = el.parentNode
					parent.style.display = "flex";
					parent.style["align-items"] = "center"
				})
			}
		
			const both = () => {
				this._addFunc(el => {
					const parent = el.parentNode
					parent.style.display = "flex";
					parent.style["align-items"] = "center"
					parent.style["justify-content"] = "center"
				})
			}
		
			switch (param) {
				case "horizontally":
					horizontally()
					break;
				case "vertically":
					vertically()
					break;
				case "both":
					both()
					break;
				default:
					throw "[Cascade] Center: Wrong arguments"
			}
			return this
		}
		clear(opt) {
			this._addProp("clear", opt)
			return this
		}
		constructor(selector, cascade) {
			this.c = cascade
			this.s = selector
		}
		mouse(prop) {
			this._addProp("cursor", prop)
			return this
		}
		cursor(prop) {
			return this.mouse(prop)
		}
		display(method) {
			this._addProp("display", method)
			return this
		}
		filter() {
			const args = [...arguments]
			if (args.length % 2 != 0) {
				this._addProp("filter", args.join(' '))
				return this
			}
			let array = []
			for (let i = 0; i < args.length; i += 2) {
				const func = args[i]
				const val = args[i + 1]
				array.push(`${func}(${val})`)
			}
			this._addProp("filter", array.join(' '))
			return this
		}
		align_content(opt) {
			this._addProp("align-content", opt)
			return this
		}
		align_items(opt) {
			this._addProp("align-items", opt)
			return this
		}
		align_self(opt) {
			this._addProp("align-self", opt)
			return this
		}
		flex() {
			this._addProp("flex", [...arguments].join(' '))
			return this
		}
		flex_basis(length) {
			this._addProp("flex-basis", length)
			return this
		}
		flex_direction(dir) {
			this._addProp("flex-direction", dir)
			return this
		}
		flex_flow() {
			this._addProp("flex-flow", [...arguments].join(' '))
			return this
		}
		flex_grow(n) {
			this._addProp("flex-grow", n)
			return this
		}
		flex_shrink(n) {
			this._addProp("flex-shrink", n)
			return this
		}
		flex_wrap(wrap) {
			this._addProp("flex-wrap", wrap)
			return this
		}
		flexify() {
			this._addProp("display", "flex")
			return this
		}
		justify_content(arg) {
			this._addProp("justify-content", arg)
			return this
		}
		order(int) {
			this._addProp("order", int)
			return this
		}
		float(opt) {
			this._addProp("float", opt)
			return this
		}
		mixin(name) {
			if (this.c.mixins.hasOwnProperty(name)) {
				return this.c.mixins[name](this)
			}
			throw "[Cascade] Mixins: wrong name"
			return this
		}
		onHover(f) {
			const s = `${this.s}`
			this.s = `${this.s}:hover`
			f(this)
			this.s = s
			return this
		}
		color(v) {
			this._addProp("color", v)
			return this
		}
		font_face(name, src, options) {
			if (!src) {
				const url = encodeURI(`https://fonts.googleapis.com/css?family=${name}`)
				const request = require('sync-request');
				const res = request("GET", url)
				if (res.statusCode != 200) {
					throw "[Cascade] font-face: couldn't find the font on Google Fonts"
				}
				const css = res.getBody().toString().replace(/(\r\n\t|\n|\r\t)/gm,"")
				if (typeof this.c.css["*font-face*"] != 'undefined') {
					this.c.css["*font-face*"] += css
				} else {
					this.c.css["*font-face*"] = css
				}
			} else {
				let str = `@font-face {font-family: ${name};src: ${src};`
				if (options) {
					for (let i of Object.keys(options)) {
						str += `${i}: ${options[i]};`
					}
				}
				str += "}"
				if (typeof this.c.css["*font-face*"] != 'undefined') {
					this.c.css["*font-face*"] += str
				} else {
					this.c.css["*font-face*"] = str
				}
			}
		}
		line_height(v) {
			this._addProp("line-height", v)
			return this
		}
		text_align(property) {
			this._addProp("text-align", property)
			return this
		}
		text_shadow() {
			this._addProp("text-shadow", [...arguments].join(' '))
			return this
		}
	}
}
Cascade.init = function(selector) {
	const cascade = this.funcClass()
	return new cascade(selector, Cascade)
}
Cascade.all = Cascade.init("*")
Cascade.body = Cascade.init("body")
Cascade.css = {}
Cascade.font_face = function() {
	return this.init("").font_face(...arguments)
}
Cascade.fontFace = function() {
	return this.font_face(...arguments)
}
Cascade.generateCSS = function() {
	const css = this.css

	let str = ""
	for (let key of Object.keys(css)) {
		if (key == "*media*") {
			for (let query of css["*media*"]) {
				const selector = query.selector
				const mediaCSS = query.css

				str += `@media ${selector} {`
				for (let i of Object.keys(mediaCSS)) {
					str += renderCSS(i, mediaCSS[i])
				}
				str += "}"
			}
		} else if (key == "*keyframe*") {
			for (let keyframe of css["*keyframe*"]) {
				const name = keyframe.name
				const points = keyframe.timeline

				str += `@keyframes ${name} {`
				for (let i of Object.keys(points)) {
					if (isNaN(parseInt(i))) {
						str += renderCSS(i, points[i])
					} else {
						str += renderCSS(`${i}%`, points[i])
					}

				}
				str += "}"
			}
		} else if (key == "*font-face*") {
			str += css["*font-face*"] // paste it as it is
		} else {
			str += renderCSS(key, css[key])
		}
	}
	const csso = require('csso');

	const minified = csso.minify(str).css
	return minified

	function renderCSS(key, obj) {
		let str = `${key} {`

		for (let name of Object.keys(obj)) {
			if (name == "*externalCSS*") {
				str += obj[name]
			} else {
				str += `${name}: ${obj[name]};`
			}
		}
		str += "}"
		return str
	}
}
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
	const model = `"use strict";var _createClass=function(){function a(b,c){for(var g,d=0;d<c.length;d++)g=c[d],g.enumerable=g.enumerable||!1,g.configurable=!0,"value"in g&&(g.writable=!0),Object.defineProperty(b,g.key,g)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var CascadeLoadScripts=function(){function CascadeLoadScripts(){_classCallCheck(this,CascadeLoadScripts),this.loaded()}return _createClass(CascadeLoadScripts,[{key:"loaded",value:function loaded(){document.addEventListener("DOMContentLoaded",function(){runScripts()})}},{key:"runScripts",value:function runScripts(){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,o,_iterator=this.scripts[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){o=_step.value;try{var s=o.s,f=eval(o.f),el=document.querySelector(s);f(el)}catch(a){console.error(a)}}}catch(a){_didIteratorError=!0,_iteratorError=a}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}},{key:"scripts",get:function get(){return${json}}}]),CascadeLoadScripts}(),CascadeScripts=new CascadeLoadScripts;`
	return model
}
Cascade.js = []
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
	this.keyframesGen(selector, this.keyframe)
}
Cascade.from = 0
Cascade.to = 100
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
Cascade.min_height = function(v, u = "px") {
	return `(min-height: ${v}${u})`
}
Cascade.min_width = function(v, u = "px") {
	return `(min-width: ${v}${u})`
}
Cascade.mobile = "only screen and (min-device-width : 320px) and (max-device-width : 480px)"
Cascade.and = " and "
Cascade.not = " not "
Cascade.or = " or "
Cascade.comma = ", "
Cascade.only = " only "
Cascade.print = "print"
Cascade.query = function(prop, value) {
	return `(${prop}: ${value})`
}
Cascade.screen = "screen"
Cascade.mixins = {}

Cascade.newMixin = function(name, f) {
	Cascade.mixins[name] = f
}

Cascade.loadModule = function(object) {
	for (let i of Object.keys(object)) {
		this.newMixin(i, object[i])
	}
}
Cascade.mode = 0 // 0: Normal
				 // 1: Media Query
				 // 2: Keyframes
Cascade.save = function(pathCSS, pathJS) {
	const fs = require("fs");
	const streamCSS = fs.createWriteStream(pathCSS);
	streamCSS.once('open', fd => {
		streamCSS.write(this.generateCSS());
		streamCSS.end();
	});
	const streamJS = fs.createWriteStream(pathJS);
	streamJS.once('open', fd => {
		streamJS.write(this.generateJS());
		streamJS.end();
	});
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