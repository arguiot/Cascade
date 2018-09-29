center(param = "horizontally") {

	const horizontally = () => {
		this._addProp("margin", "0 auto");
	}

	const vertically = () => {
		
	}


	const both = () => {

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
}
