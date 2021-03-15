let apartmentSwiper = new Swiper('.apartment__swiper', {
	slidesPerView: 'auto',
	spaceBetween: 0,
	breakpoints: { 
        1280: { 
            slidesPerView: 'auto',
			slidesPerColumn: 2,
        },
    },
	navigation: {
		nextEl: '.apartment__button-next',
		prevEl: '.apartment__button-prev', 
	},
});
