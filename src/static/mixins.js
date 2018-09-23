Cascade.mixins = {}

Cascade.newMixin = function(name, f) {
	Cascade.mixins[name] = f
}

Cascade.loadModule = function(object) {
	for (let i of Object.keys(object)) {
		this.newMixin(i, object[i])
	}
}
