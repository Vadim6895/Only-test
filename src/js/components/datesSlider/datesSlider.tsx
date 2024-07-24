import React from 'react';

/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { Fact } from '../../types';

const breakpoints = {
  320: {
    slidesPerView: 1.5,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 3.0,
    spaceBetween: 10,
  },
  1440: {
    slidesPerView: 3.5,
    spaceBetween: 80,
  },
};

const sliderBtnsNavigation = {
  nextEl: '.slider__btn-next',
  prevEl: '.slider__btn-prev',
};

function DatesSlider({ slides }: { slides: Fact[] }) {
  return (
    <div className="slider">
      <Swiper
        speed={700}
        modules={[Navigation]}
        breakpoints={breakpoints}
        navigation={sliderBtnsNavigation}
      >
        {slides.map((item: Fact) => (
          <SwiperSlide key={item.title}>
            <div className="slide__wrapper">
              <p className="slide__title">{item.title}</p>
              <p className="slide__desc">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="slider__btn-prev" type="button">
        <span className="visually-hidden">Назад</span>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 11L2 6L7 1" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
      <button className="slider__btn-next" type="button">
        <span className="visually-hidden">Вперед</span>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
}

export default DatesSlider;
