import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function updateNavigationState(swiper) {
  const nextButton = document.querySelector('.reviews__swiper-button--next');
  const prevButton = document.querySelector('.reviews__swiper-button--prev');

  if (swiper.isBeginning) {
    prevButton.classList.add('swiper-button--disabled');
  } else {
    prevButton.classList.remove('swiper-button--disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('swiper-button--disabled');
  } else {
    nextButton.classList.remove('swiper-button--disabled');
  }
}

function addKeyboardSupport() {
  const buttons = document.querySelectorAll('.swiper-button');

  buttons.forEach((button) => {
    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.click();
      }
    });
  });
}

addKeyboardSupport();

export function initSwiper() {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.juri__swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: window.innerWidth <= 768,
      allowTouchMove: window.innerWidth <= 768,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },
      navigation: {
        nextEl: '.juri__swiper-button--next',
        prevEl: '.juri__swiper-button--prev',
      },
      pagination: {
        el: '.juri__swiper-pagination',
        clickable: true,
      },
    });

    new Swiper('.reviews__swiper', {
      modules: [Navigation, Pagination],
      direction: 'horizontal',
      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      simulateTouch: window.innerWidth <= 768,
      allowTouchMove: window.innerWidth <= 768,
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
      navigation: {
        nextEl: '.reviews__swiper-button--next',
        prevEl: '.reviews__swiper-button--prev',
        disabledClass: 'swiper-button--disabled',
      },
      pagination: {
        el: '.reviews__pagination',
        clickable: true,
      },
      on: {
        slideChange: function (swiper) {
          updateNavigationState(swiper);
        },
        init: function (swiper) {
          updateNavigationState(swiper);
        },
      },
    });
    addKeyboardSupport();
  });
}
