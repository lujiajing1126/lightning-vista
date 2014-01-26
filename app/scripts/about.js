$(function(){
	'use strict';
	$('#myTab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
});
