let apartmentSwiper = new Swiper('.apartment__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	breakpoints: { 
        1280: { 
            slidesPerView: 'auto',
			slidesPerColumn: 2,
        },
    },
});
