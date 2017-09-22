$(function(){
	$('.operate .thumbs-up').click(function(){
	  if($(this).children().hasClass('thub')){
	    $(this).children().removeClass('thub');
	  }else{
	    $(this).children().addClass('thub');
	  }              
	})
	$('.commbox .dz').click(function(){
	  if($(this).hasClass('thub')){
	    $(this).removeClass('thub');
	  }else{
	    $(this).addClass('thub');
	  }              
	})

	$('.hotvideo .operate .collect').click(function(){
		if($(this).children().hasClass('done')){
		    $(this).children().removeClass('done');
		  }else{
		    $(this).children().addClass('done');
		  }              
		})

})