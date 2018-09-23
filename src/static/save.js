save(path) {
	const fs = require("fs");
	const stream = fs.createWriteStream(path);
	stream.once('open', fd => {
		stream.write(this.generateCSS());
		stream.end();
	});
}
