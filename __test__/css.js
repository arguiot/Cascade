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
			return $(C.generateCSS()).Equal(".left{postion:absolute;left:0}.center{margin:0 auto}.right{postion:absolute;right:0}")
		}
	)
	eye.test("Append CSS", "node",
		$ => {
			C.css = {} // resets CSS
			C("el")
				.appendCSS("border-radius: 5px;")
			return $(C.generateCSS()).Equal("el{border-radius:5px}")
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
			return $(C.generateCSS()).Equal(".hex{background-color:#000}.img{background-image:./img/img.png}.rgb{background-color:#fff}.rgba{background-color:rgba(55,28,104,.4)}")
		}
	)
	eye.test("Borders", "node",
		$ => {
			C.css = {} // resets CSS
			C(".border")
				.border("1px solid blue")
			C(".radius")
				.border("radius", "5px")
			return $(C.generateCSS()).Equal(".border{border:1px solid #00f}.radius{border-radius:5px}")
		}
	)
	eye.test("Cursor", "node",
		$ => {
			C.css = {} // resets CSS
			C(".pointer")
				.cursor("pointer")
			return $(C.generateCSS()).Equal(".pointer{cursor:pointer}")
		}
	)
	eye.test("Clear", "node",
		$ => {
			C.css = {} // empty cache
			C(".el")
				.clear("both")
			return $(C.generateCSS()).Equal(".el{clear:both}")
		}
	)
	eye.test("Display", "node",
		$ => {
			C.css = {} // resets CSS
			C(".flex")
				.display("flex")
			return $(C.generateCSS()).Equal(".flex{display:flex}")
		}
	)
	eye.test("Filter", "node",
		$ => {
			C.css = {} // empty cache
			C("none")
				.filter("none")
			C("blur")
				.filter("blur", "20px")
			return $(C.generateCSS()).Equal("none{filter:none}blur{filter:blur(20px)}")
		}
	)
	eye.describe("Text", () => {
		eye.test("Text align", "node",
			$ => {
				C.css = {} // resets CSS
				C(".text")
					.text_align("right")
				return $(C.generateCSS()).Equal(".text{text-align:right}")
			}
		)
		eye.test("Line Height", "node",
			$ => {
				C.css = {} // resets CSS
				C(".text")
					.line_height(1.17)
				return $(C.generateCSS()).Equal(".text{line-height:1.17}")
			}
		)
		eye.test("Color", "node",
			$ => {
				C.css = {} // resets CSS
				C(".text")
					.color("#000")
				return $(C.generateCSS()).Equal(".text{color:#000}")
			}
		)
		eye.test("Text Shadow", "node",
			$ => {
				C.css = {} // resets CSS
				C(".text")
					.text_shadow("1px", "pink")
				return $(C.generateCSS()).Equal(".text{text-shadow:1px pink}")
			}
		)
		eye.test("Font Face", "node",
			$ => {
				C.css = {} // resets CSS
				C.fontFace("Helvetica")
				C.fontFace("InterUI", "https://server.com/InterUI.ttf")
				return $(C.generateCSS()).Equal("@font-face{font-family:'Helvetica';font-style:normal;font-weight:400;src:local('Helvetica LT Pro'),local('HelveticaLTPro-Roman'),url(https://fonts.gstatic.com/l/font?kit=JIAxUVNqfH9WuVQQRM4zVxOi&skey=22efecd2bc0e2cb0&v=v2) format('truetype')}@font-face{font-family:InterUI;src:https://server.com/InterUI.ttf}")
			}
		)
	})
	eye.describe("Flex Box", () => {
		eye.test("Align Content", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.align_content("center")
				return $(C.generateCSS()).Equal(".parent{display:flex;align-content:center}")
			}
		)
		eye.test("Align Items", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.align_items("flex-start")
				return $(C.generateCSS()).Equal(".parent{display:flex;align-items:flex-start}")
			}
		)
		eye.test("Align Self", "node",
			$ => {
				C.css = {} // resets CSS
				C(".child")
					.flexify()
					.align_self("stretch")
				return $(C.generateCSS()).Equal(".child{display:flex;align-self:stretch}")
			}
		)
		eye.test("Flex Basis", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.flex_basis("auto")
				return $(C.generateCSS()).Equal(".parent{display:flex;flex-basis:auto}")
			}
		)
		eye.test("Flex Direction", "node",
			$ => {
				C.css = {} // resets CSS
				C(".child")
					.flexify()
					.flex_direction("column")
				return $(C.generateCSS()).Equal(".child{display:flex;flex-direction:column}")
			}
		)
		eye.test("Flex Flow", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.flex_flow("row", "wrap")
				return $(C.generateCSS()).Equal(".parent{display:flex;flex-flow:row wrap}")
			}
		)
		eye.test("Flex Grow", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.flex_grow(.6)
				return $(C.generateCSS()).Equal(".parent{display:flex;flex-grow:.6}")
			}
		)
		eye.test("Flex Shrink", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.flex_shrink(2)
				return $(C.generateCSS()).Equal(".parent{display:flex;flex-shrink:2}")
			}
		)
		eye.test("Flex Wrap", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.flex_wrap("wrap")
				return $(C.generateCSS()).Equal(".parent{display:flex;flex-wrap:wrap}")
			}
		)
		eye.test("Flex", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.flex(1, 1, "30px")
				return $(C.generateCSS()).Equal(".parent{display:flex;flex:1 1 30px}")
			}
		)
		eye.test("Justify Content", "node",
			$ => {
				C.css = {} // resets CSS
				C(".parent")
					.flexify()
					.justify_content("center")
				return $(C.generateCSS()).Equal(".parent{display:flex;justify-content:center}")
			}
		)
		eye.test("Order", "node",
			$ => {
				C.css = {} // resets CSS
				C(".child")
					.order(2)
				return $(C.generateCSS()).Equal(".child{order:2}")
			}
		)
	})
})

eye.describe("Events & Custom properties", () => {
	eye.test("All & Body", "node",
		$ => {
			C.css = {} // resets CSS
			C.body
				.background("blue")
			C.all.background("green")
			return $(C.generateCSS()).Equal("body{background:#00f}*{background:green}")
		}
	)
	eye.test("Hover", "node",
		$ => {
			C.css = {} // resets CSS
			C(".button")
				.background("blue")
				.onHover(el => el.background("green"))
			return $(C.generateCSS()).Equal(".button{background:#00f}.button:hover{background:green}")
		}
	)
})

eye.describe("Media Queries", () => {
	eye.test("Render", "node",
		$ => {
			C.css = {}
			C.mediaQuery("(min-height: 200px)", {
				".button": {
					"background": "green"
				}
			})
			return $(C.generateCSS()).Equal("@media (min-height:200px){.button{background:green}}")
		}
	)
	eye.test("Constructor", "node",
		$ => {
			C.css = {}
			C.media("(min-height: 200px)", c => {
				c(".button")
					.background("green")
			})
			return $(C.generateCSS()).Equal("@media (min-height:200px){.button{background:green}}")
		}
	)
	eye.test("Operators", "node",
		$ => {
			C.css = {} // empty css
			C.media(C.min_height(200) + C.and + C.screen, c => {
				c(".button")
					.background("green")
			})
			return $(C.generateCSS()).Equal("@media (min-height:200px) and screen{.button{background:green}}")
		}
	)
})

eye.describe("Keyframes", () => {
	eye.test("Render", "node",
		$ => {
			C.css = {}
			C.keyframesGen("name", {
				"100": {
					"background": "green"
				}
			})
			return $(C.generateCSS()).Equal("@keyframes name{to{background:green}}")
		}
	)
	eye.test("Constructor", "node",
		$ => {
			C.css = {} // empty CSS
			C.keyframes("name", c => {
				c(C.to)
					.background('green')
			})
			return $(C.generateCSS()).Equal("@keyframes name{to{background:green}}")
		}
	)
})
