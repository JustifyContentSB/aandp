//ESTATE FILTER
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

//RANGE
$(document).ready(function() {
	$( function() {
		$( ".ui-slider-handle" ).draggable();
		$( "#estateRange" ).slider({
			range: true,
	        min: 1000000000,
	        max: 8000000000,
	        values: [ 1000000000, 3000000000 ],
	        slide: function( event, ui ) {
	        	$( "#estateRangeAmount" ).val(ui.values[ 0 ].toLocaleString('ru-RU'));
	        	$( "#estateRangeAmount2" ).val(ui.values[ 1 ].toLocaleString('ru-RU'));
	      	}
		    });
			$( "#estateRangeAmount" ).val($( "#estateRange" ).slider( "values", 0 ).toLocaleString('ru-RU')) ;
			$( "#estateRangeAmount2" ).val($( "#estateRange" ).slider( "values", 1 ).toLocaleString('ru-RU')) ;
	});
});

//ESTATE CONTENT
$('.estate__tabs-type a').on('click', function(event) {
	event.preventDefault();

	$('.estate__tabs-type a').removeClass('active');
	$('.estate__tabs-map').removeClass('active');
	$('.estate__content').removeClass('active');

	$(this).addClass('active');
	$($(this).attr('href')).addClass('active');
});

$('.estate__tabs-map').on('click', function(event) {
	event.preventDefault();

	$('.estate__content').removeClass('active');
	$(this).addClass('active');
	$($(this).attr('href')).addClass('active');
});

$('.estate__map').on('click', function(event) {
	$('.estate__popup').addClass('active');
	$('.overlay').addClass('active');
	$('body').addClass('no-scroll');
});

$('.overlay').on('click', function(event) {
	$('.estate__popup').removeClass('active');
	$('.overlay').removeClass('active');
	$('body').removeClass('no-scroll');
});