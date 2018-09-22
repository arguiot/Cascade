/*

 Cascade - An innovative CSS preprocessor made of JavaScript

 Copyright © Arthur Guiot 2018

*/

const Cascade = function() {
	// Call the constructor
	return Cascade.init(...arguments)
}

// Static methods

Cascade.init = function() {
	class cascade {
		
	}
	return cascade(...arguments)
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