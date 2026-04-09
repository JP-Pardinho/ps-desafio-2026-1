"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div className={styles.container}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img
            src="/assets/images/banner1.png"
            alt="Banner 1"
            className={styles.slideImage}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/assets/images/banner2.png"
            alt="Banner 2"
            className={styles.slideImage}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/assets/images/banner3.png"
            alt="Banner 3"
            className={styles.slideImage}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
