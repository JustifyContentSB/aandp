$('.phone').on('click', function(e) {
	e.preventDefault();
	$('.phone__modal').addClass('active');
	$('.overlay').addClass('active');
	$('body').addClass('no-scroll');
});

$('.phone__modal-close').on('click', function(e) {
	e.preventDefault();
	$('.phone__modal').removeClass('active');
	$('.overlay').removeClass('active');
	$('body').removeClass('no-scroll');
});

$('.overlay').on('click', function(e) {
	$('.phone__modal').removeClass('active');
	$('.overlay').removeClass('active');
	$('body').removeClass('no-scroll');
});