document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const sidebar = document.querySelector('.sidebar');

  burger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
});

// const swiper = new Swiper('.mySwiper', {
//   loop: true,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2000,
//     disableOnInteraction: false,
//   },
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     480: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 1,
//     },
//     1024: {
//       slidesPerView: 1,
//     },
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
