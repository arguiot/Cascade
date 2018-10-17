const C = require(__testDir + "../dist/cascade.js")
const linter = require("eslint").linter;

const options = {
	"env": {
		"browser": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"no-console": [
			"error",
			{
				"allow": [
					"warn",
					"error"
				]
			}
		],
		"no-unused-vars": "off",
		"no-cond-assign": "off",
		"no-inner-declaration": "off"
	}
}

eye.describe("CSS based transormations", () => {
	eye.test("Center", "node",
		$ => {
			C.js = [] // empty JS cache
			C(".button")
				.center("both")
			const js = C.generateJS()
			const message = linter.verify(js, options)
			return $(message).Equal([])
		}
	)
})
