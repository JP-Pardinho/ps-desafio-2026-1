"use client";

import styles from "./hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img
            src="/assets/images/banca.jpeg"
            alt="Banca"
            className={styles.slideImage}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/assets/images/es.png"
            alt="Futvolei"
            className={styles.slideImage}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
