$('.js-request-btn').on('click', function(e) {
	e.preventDefault();
	$('.request').addClass('active');
	$('.overlay').addClass('active');
	$('body').addClass('no-scroll');
});

$('.request__close').on('click', function(e) {
	e.preventDefault();
	$('.request').removeClass('active');
	$('.overlay').removeClass('active');
	$('body').removeClass('no-scroll');
});

$('.overlay').on('click', function(e) {
	$('.request').removeClass('active');
	$(this).removeClass('active');
	$('body').removeClass('no-scroll');
});