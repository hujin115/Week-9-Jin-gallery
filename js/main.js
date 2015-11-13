$('img').each(function(){
			var W = $('.galimg').width();
			$(this).height(W);
		
});


$('.galimg').children(function(e)	{	

		if (this.width > this.height) {
			
			$(this).addClass('landscape');


		} 

		else   {
			$(this).addClass('portrait') ;
		}

});
		

