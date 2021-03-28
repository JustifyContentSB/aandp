if($(window).width() < 1280) {
	$('.info__list').on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});
}