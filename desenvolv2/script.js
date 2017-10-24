$(document).ready(function(){
	$(".item").hover(function(){
		var id;
		id = $(this).attr('id');
	
		$(".submenu." +id).css('display', 'block');

	})

	$(".item").mouseout(function(){
		$('.submenu').css('display', 'none');

	})


	$(".submenu").hover(function(){
		$(this).css('display','block');

	})	
