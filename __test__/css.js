const C = require(__testDir + "../dist/cascade.js")

eye.describe("Basic modifiers", () => {
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

	eye.test("Background", "node",
		$ => {
			C.css = {} // resets CSS
			C(".hex")
				.background("#000")
			C(".img")
				.background("./img/img.png")
			C(".rgb")
				.background(255, 255, 255)
			C(".rgba")
				.background(55, 28, 104, 0.4)
			return $(C.generateCSS()).Equal(".hex {background-color: #000;}.img {background-image: ./img/img.png;}.rgb {background-color: rgb(255, 255, 255);}.rgba {background-color: rgba(55, 28, 104, 0.4);}")
		}
	)
	eye.test("Borders", "node",
		$ => {
			C.css = {} // resets CSS
			C(".border")
				.border("1px solid blue")
			C(".radius")
				.border("radius", "5px")
			return $(C.generateCSS()).Equal(".border {border: 1px solid blue;}.radius {border-radius: 5px;}")
		}
	)
	eye.test("Cursor", "node",
		$ => {
			C.css = {} // resets CSS
			C(".pointer")
				.cursor("pointer")
			return $(C.generateCSS()).Equal(".pointer {cursor: pointer;}")
		}
	)
	eye.test("Display", "node",
		$ => {
			C.css = {} // resets CSS
			C(".flex")
				.display("flex")
			return $(C.generateCSS()).Equal(".flex {display: flex;}")
		}
	)

	eye.test("Text align", "node",
		$ => {
			C.css = {} // resets CSS
			C(".text")
				.text_align("right")
			return $(C.generateCSS()).Equal(".text {text-align: right;}")
		}
	)
})

eye.describe("Events & Custom properties", () => {
	eye.test("Hover", "node",
		$ => {
			C.css = {} // resets CSS
			C(".button")
				.background("blue")
				.onHover(el => el.background("green"))
			return $(C.generateCSS()).Equal(".button {background: blue;}.button:hover {background: green;}")
		}
	)
})