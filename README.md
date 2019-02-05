# Cascade
An innovative CSS preprocessor made of JavaScript (work in progress)

Example of what you can do with Cascade:
```js
const C = require("cascade");

C("button")
  .center() // will center (horizontally) the element for you
  .background("#292929") // will set the background color to #292929
  .hover(b => b.text("decoration", "underlined") // on hover, the text will appear underlined
  .appendCSS(`
    border-radius: 5px;
	width: 50px
  `) // if you want to add native CSS to the element, you can

C.save("path/to/file.css", "path/to/file.js")
```
