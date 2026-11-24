'use client'

import styles from './hero.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Swiper
        modules={[Autoplay]}
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
  )
}
