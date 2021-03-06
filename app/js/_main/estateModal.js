$('.estate__choose-btn').on('click', function(e) {
	e.preventDefault();
	$('.estate__manage').addClass('active');
	$('.overlay').addClass('active');
	$('body').addClass('no-scroll');
});

$('.estate__manage-close').on('click', function(e) {
	e.preventDefault();
	$('.estate__manage').removeClass('active');
	$('.overlay').removeClass('active');
	$('body').removeClass('no-scroll');
});

$('.overlay').on('click', function(e) {
	$('.estate__manage').removeClass('active');
	$('.overlay').removeClass('active');
	$('body').removeClass('no-scroll');
});