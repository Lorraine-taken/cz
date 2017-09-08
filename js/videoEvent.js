$(function(){
	$('.vbox').on('click', function(){
		var url = $(this).attr('jump_data');
		window.location.href=url;
	})
	
})