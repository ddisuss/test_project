const gallary = new Swiper('.gallary', {
    navigation: {
      nextEl: '.btn-next',
      prevEl: '.btn-prev',
    },

    pagination: {
        el: '.pagination',
        clickable:true,
      },
      slidesPerView: 3,
      spaceBetween: 0,
  });
