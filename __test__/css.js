const C = require(__testDir + "../dist/cascade.js")

eye.test("Align", "node",
	$ => {
		C.css = {} // resets CSS
		C(".left")
			.align("left")
		C(".center")
			.align("center")
		C(".right")
			.align("right")
		return $(C.generateCSS()).Equal(".left {postion: absolute;left: 0;}.center {margin: 0 auto;}.right {postion: absolute;right: 0;}")
	}
)
eye.test("Append CSS", "node",
	$ => {
		C.css = {} // resets CSS
		C("el")
			.appendCSS("border-radius: 5px;")
		return $(C.generateCSS()).Equal("el {border-radius: 5px;}")
	}
)
