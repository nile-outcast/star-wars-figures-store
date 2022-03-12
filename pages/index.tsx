import { BASE_URL } from 'config'
import type { GetServerSideProps, NextPage } from 'next'
import { HomePageHeader, ProductItem } from 'src/components'
import { Product } from 'src/types'
import { GridContainer } from 'src/ui'

type Props = {
  data: Product[]
  meta: { totalPages: number }
}

const Products: NextPage<Props> = ({ data }: Props) => {
  return (
    <main>
      <HomePageHeader />
      <GridContainer>
        {data.map(product => (
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
