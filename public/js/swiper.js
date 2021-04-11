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

var swiper = new Swiper('.swiper2', {
            direction: 'vertical',
            slidesPerView: 2,
            spaceBetween: 30,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        }); 



    var swiper = new Swiper('.swiper-banner', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

var swiper = new Swiper('.swiper-items', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });