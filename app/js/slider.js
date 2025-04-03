const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
   /* autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },*/

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});