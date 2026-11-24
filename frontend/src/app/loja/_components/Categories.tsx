'use client'

import { api } from '@/services/api'
import { CategoryType } from '@/types/category'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './categories.module.css'
import 'swiper/css/bundle'

export default function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category_id')

  useEffect(() => {
    async function getCategories() {
      const { response, error } = await api('GET', '/category')

      if (response) {
        setCategories(response as CategoryType[])
      } else {
        console.error(error?.message)
      }
    }
    getCategories()
  }, [])

  return (
    <section className={styles.product} id="products">
      <div className={styles.container}>
        <h1 id="produtos" className={styles.title}>
          CATEGORIAS
        </h1>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={15}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className={styles.swiper}
          >
            <SwiperSlide>
              <div
                className={styles.categoryCard}
                onClick={() => router.push('/loja', { scroll: false })}
                style={{
                  cursor: 'pointer',
                  border: !currentCategory ? '2px solid #ffd200' : 'none',
                }}
              >
                <h2>Todos Produtos</h2>
              </div>
            </SwiperSlide>

            {categories.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className={styles.categoryCard}
                  onClick={() =>
                    router.push(`/loja/?category_id=${item.id}`, {
                      scroll: false,
                    })
                  }
                  style={{
                    cursor: 'pointer',
                    border:
                      currentCategory === String(item.id)
                        ? '2px solid #ffd200'
                        : 'none',
                  }}
                >
                  <h2>{item.name}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
