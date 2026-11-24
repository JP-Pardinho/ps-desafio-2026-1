'use client'

import { sportsItemType } from '@/types/sportsItem'
import styles from './products.module.css'
import ProductCard from './ProductCard'
import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { useSearchParams } from 'next/navigation'
import Pagination from './Pagination'

export default function Products() {
  const [sportsItems, setSportsItems] = useState<sportsItemType[]>([])
  const searchParams = useSearchParams()
  const categoryId = searchParams.get('category_id')
  const [activePage, setActivePage] = useState(1)
  const [productPerPage] = useState(12)

  useEffect(() => {
    async function getSportsItems() {
      const res = categoryId
        ? `/products?category_id=${categoryId}`
        : '/products'

      const { response, error } = await api('GET', res)

      if (response) {
        setSportsItems(response as sportsItemType[])
      } else {
        console.error(error?.message)
      }
    }

    getSportsItems()
  }, [categoryId])

  const indexOfLastProduct = activePage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProducts = sportsItems.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  return (
    <section className="products" id="products">
      <div className={styles.container}>
        <h1 id="produtos" className={styles.title}>
          NOSSOS PRODUTOS
        </h1>
        <div className={styles.productList}>
          {currentProducts.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
        <Pagination
          totalProducts={sportsItems.length}
          productPerPage={productPerPage}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </div>
    </section>
  )
}
