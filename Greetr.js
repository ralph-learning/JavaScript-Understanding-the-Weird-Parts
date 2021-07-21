(function(global, $) {

	const Greetr = function(firstname, lastname, language) {
		return new Greetr.init(firstname, lastname, language);
	}

	// functions
	Greetr.prototype = {
		hello: function() {
			console.log('Hello, ' + this.firstname);
		}
	}

	init = Greetr.init = function(firstname, lastname, language) {
		const self = this;

		self.firstname = firstname || '';
		self.lastname = lastname || '';
		self.language = language || 'en';
	}

	init.prototype = Greetr.prototype;

	// exposure on global object
	global.Greetr = global.G$ = Greetr;

}(window, window.jQuery));
