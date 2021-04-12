var swiper = new Swiper('.swiper1', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  // autoplay: {
  //     delay: 2000,
  //     disableOnInteraction: false,
  // },
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 30,
    stretch: 10,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    // type: 'fraction',
    clickable: true,
  },
  // },
});

var swiper = new Swiper('.swiper-banner', {
      spaceBetween: 30,
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });