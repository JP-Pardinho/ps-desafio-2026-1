import { Metadata } from 'next'
import Carousel from './_components/Carousel'
import Products from './_components/Products'
import Categories from './_components/Categories'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Street Brasil | Início',
  description: 'Loja de artigos esportivos do Brasil.',
}

export default function Home() {
  return (
    <main>
      <Carousel />
      <Suspense>
        <Categories />
      </Suspense>
      <Suspense>
        <Products />
      </Suspense>
    </main>
  )
}
