const gallary = new Swiper('.gallarysecond', {
    navigation: {
      nextEl: '.btn-next-second',
      prevEl: '.btn-prev-second',
    },

    pagination: {
        el: '.pagination-second',
        clickable:true,
      },
      slidesPerView: 3,
      spaceBetween: 0,
  });