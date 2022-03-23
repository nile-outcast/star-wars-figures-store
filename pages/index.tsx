import type { NextPage } from 'next'
import { useCallback, useEffect } from 'react'
import { HomePageHeader, ProductItem } from 'src/components'
import { useProducts } from 'src/hooks'
import { PageResponseType } from 'src/types'
import { GridContainer, Loader } from 'src/ui'

const Products: NextPage = () => {
  const { data, size, setSize, isValidating } = useProducts<PageResponseType>()

  const scrollHandler = useCallback(
    (event: Event) => {
      const {
        documentElement: { scrollHeight, scrollTop, clientHeight },
      } = event?.target as Document

      if (
        scrollHeight - scrollTop - clientHeight < 50 &&
        size < (data ? data[0].meta.totalPages : size + 1)
      ) {
        setSize(size + 1)
      }
    },
    [data, setSize, size],
  )

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)

    return () => document.removeEventListener('scroll', scrollHandler)
  }, [scrollHandler])

  return (
    <main>
      <HomePageHeader />
      {data ? (
        <>
          <GridContainer>
            {data.map(products =>
              products.data.map(product => (
                <ProductItem key={product.id} product={product} />
              )),
            )}
          </GridContainer>
          {isValidating && <Loader data-with-margin={true} />}
        </>
      ) : (
        <Loader />
      )}
    </main>
  )
}

export default Products
