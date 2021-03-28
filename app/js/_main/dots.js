let propertyType = document.querySelectorAll('.property__type');
for(let i = 0; i < propertyType.length; i++) {
	for(let y = 0; y < 50; y++) {
		propertyType[i].innerHTML += '.';
	}
}