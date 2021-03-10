var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: { 
        768: { 
            spaceBetween: 10,
        },
        1280: { 
            spaceBetween: 15,
        } 
    },
    navigation: {
        nextEl: '.gallery-thumbs-next',
        prevEl: '.gallery-thumbs-prev',
    },
});

var galleryTop = new Swiper('.clubhouse__swiper', {
    slidesPerView: 'auto',
    spaceBetween: 2,
    navigation: {
        nextEl: '.clubhouse__swiper-next',
        prevEl: '.clubhouse__swiper-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

