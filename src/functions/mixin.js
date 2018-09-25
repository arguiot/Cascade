mixin(name) {
	if (this.c.mixins.hasOwnProperty(name)) {
		return this.c.mixins[name](this)
	}
	throw "[Cascade] Mixins: wrong name"
	return this
}
