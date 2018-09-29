center(param = "horizontally") {

	const horizontally = () => {
		this._addProp("margin", "0 auto");
	}

	const vertically = () => {
		this._addFunc(el => {
			const parent = el.parentNode
			parent.style.display = "flex";
			parent.style["align-items"] = "center"
		})
	}

	const both = () => {
		this._addFunc(el => {
			const parent = el.parentNode
			parent.style.display = "flex";
			parent.style["align-items"] = "center"
			parent.style["justify-content"] = "center"
		})
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
