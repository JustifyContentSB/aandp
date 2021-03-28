if($(window).width() > 1279) {
	$('.composition__show').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.composition__table').toggleClass('active');
	}); 
}