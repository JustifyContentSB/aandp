$('.header__toggle').on('click', function(e) {
	e.preventDefault();
	$('.menu').addClass('active');
	$('body').addClass('no-scroll');
});

$('.menu__close').on('click', function(e) {
	e.preventDefault();
	$('.menu').removeClass('active');
	$('body').removeClass('no-scroll');
});