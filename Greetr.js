(function(global, $) {

	const Greetr = function(firstname, lastname, language) {
		return new Greetr.init(firstname, lastname, language);
	}

	const supportedLanguages = ['es', 'en'];

	const greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	const formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	const logMessages = {
		en: 'Logged in',
		es: 'Inicio sesion'
	}

	// Methods
	Greetr.prototype = {

		fullName: function() {
			return this.firstname + ' ' + this.lastname;
		},

		validate: function() {
			if (supportedLanguages.indexOf(this.language) === -1) {
				throw 'Invalid language';
			}
		},

		greetig: function() {
			return greetings[this.language] + ' ' + this.firstname + '!';
		},

		formalGreeting: function() {
			return formalGreetings[this.language] + ', ' + this.fullName();
		},

		greet: function(formal) {
			let msg;
			if (formal) {
		    msg = this.formalGreeting();
			} else {
				msg = this.greetig();
			}

			if (console) {
				console.log(msg);
			}

			return this;
		},

		log: function() {
			if (console) {
				console.log(logMessages[this.language] + ': ' + this.fullName());
			}

			return this;
		},

		setLang: function(lang) {
			this.language = lang;

			this.validate();

			return this;
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
