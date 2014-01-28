$(function(){
	'use strict';
	$('#loading').hide('slow');
	$('body').prepend(template.render('learn'));
	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
});