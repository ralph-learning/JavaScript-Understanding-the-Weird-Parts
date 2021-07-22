$('#login').on('click', function() {
	$('#login-div').hide();

	G$('Ralph', 'Effting')
		.setLang($('#lang').val())
		.greetingEl('#greeting')
		.log();
});
