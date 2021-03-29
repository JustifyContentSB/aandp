$('.js-download-btn').on('click', function(e) {
	e.preventDefault();
	$('.download').addClass('active');
	$('.overlay').addClass('active');
	$('body').addClass('no-scroll');
});

$('.download__close').on('click', function(e) {
	e.preventDefault();
	$('.download').removeClass('active');
	$('.overlay').removeClass('active');
	$('body').removeClass('no-scroll');
});

$('.overlay').on('click', function(e) {
	$('.download').removeClass('active');
	$(this).removeClass('active');
	$('body').removeClass('no-scroll');
});