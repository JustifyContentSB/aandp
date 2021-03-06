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