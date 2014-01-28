$(function(){
	'use strict';
	$('#loading').hide('slow');
	$('#wrap').html(template.render('index'));
	// Bind an event handler.
});
$(window).bind('hashchange', function(e) {
	var hash = location.hash;
	var template_name = hash.slice(1);
	$('#wrap').html(template.render(template_name));
});
// Manually trigger the event handler.
$(window).trigger('hashchange');
