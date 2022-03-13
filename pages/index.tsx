/* eslint-disable no-console */
import { BASE_URL } from 'config'
import type { GetServerSideProps, NextPage } from 'next'
import { useEffect, useState } from 'react'
import { HomePageHeader, ProductItem } from 'src/components'
import { useProducts } from 'src/hooks'
import { Product } from 'src/types'
import { GridContainer } from 'src/ui'

type Props = {
  data: Product[]
  meta: { totalPages: number }
}

const Products: NextPage<Props> = ({ data, meta }: Props) => {
  const [products, setProducts] = useState<Product[]>(data)

  const [isConcat, setConcat] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler)
  }, [])

  const scrollHandler = (event: Event) => {
    const {
      documentElement: { scrollHeight, scrollTop, clientHeight },
    } = event?.target as Document

    if (scrollHeight - scrollTop - clientHeight < 50) {
      setConcat(true)
    }
  }

  const [nextPage, setNextPage] = useState(2)
  const { data: swrData, error } = useProducts<Props>(nextPage)

  useEffect(() => {
    if (isConcat && nextPage <= meta.totalPages && !error) {
      console.log('useEffect w Concat')
      setProducts(prev => (swrData ? prev.concat(swrData?.data) : prev))
      setNextPage(prev => prev + 1)
      setConcat(false)
    }

    console.log('useEffect w/Out Concat')
  }, [error, isConcat, meta.totalPages, nextPage, swrData])

  return (
    <main>
      <HomePageHeader />
      <GridContainer>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </GridContainer>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${BASE_URL}/api/products?page=1`)
  const data: Props = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: data,
  }
}

export default Products
