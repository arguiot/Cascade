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
