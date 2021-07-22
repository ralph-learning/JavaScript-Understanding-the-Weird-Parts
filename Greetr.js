(function(global, $) {

  // 'new' an object
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

    // validate if the langague has supported
    validate: function() {
      if (supportedLanguages.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstname + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // Wrapper the formal and informal greeting to use only one method to greet.
    greet: function(formal) {
      let msg;
      // set formal message if formal is true
      if (formal) {
        msg = this.formalGreeting();
      } else {
        // set informal message if formal is not true
        msg = this.greeting();
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

      // validate if the langague is supported
      this.validate();

      return this;
    },

    // Add / change text in HTML using some library jQuery like
    greetingEl: function(selector, formal) {
      if (!$) {
        throw 'jQuery missing!';
      }

      if(!selector) {
        throw 'Missing jQuery selector!';
      }

      let msg;
      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      // Add text to the element selected
      $(selector).text(msg);

      return this;
    }

  }

  // Function constructor
  init = Greetr.init = function(firstname, lastname, language) {
    const self = this;

    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
  }

  init.prototype = Greetr.prototype;

  // expose in the global using G$ or Greetr
  global.Greetr = global.G$ = Greetr;

}(window, window.jQuery));
