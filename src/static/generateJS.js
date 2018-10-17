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
