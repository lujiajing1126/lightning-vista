'use strict';
function IsContain(arr,value)  {
	for(var i=0;i<arr.length;i++)  {
		if(arr[i] === value)  {
			return true;
		}
	}
	return false;
}
var templates = ['index','buynow','learn','about'];
$(window).bind('hashchange', function() {
	var hash = location.hash;
	var templateName = hash.slice(1);
	// judge if it is null
	if(templateName)  {
		// judge if it is 404
		if(IsContain(templates,templateName))  {
			$('div#loading').fadeOut('slow','linear');
			$('#wrap').html(template.render(templateName));
		}  else  {
			$('div#loading').fadeOut('slow','linear');
			$('#wrap').html(template.render('index'));
		}
	}  else  {
		$('div#loading').fadeOut('slow','linear');
		$('#wrap').html(template.render('index'));
	}
	Holder.run();
});
// Manually trigger the event handler.
$(window).trigger('hashchange');