$(function(){
	'use strict';
	$('#loading').hide('slow');
	$('#wrap').html(template.render('index'));
	Holder.run();
	// Bind an event handler.
});
$(window).bind('hashchange', function(e) {
	var hash = location.hash;
	var template_name = hash.slice(1);
	$('#wrap').html(template.render(template_name));
	Holder.run();
});
// Manually trigger the event handler.
$(window).trigger('hashchange');
