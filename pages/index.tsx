import type { GetStaticProps, NextPage } from 'next'
import { HomePageHeader, ProductItem } from 'src/components'
import { Product } from 'src/types'
import { GridContainer } from 'src/ui'

type Props = {
  data: Product[]
  totalPages: number
}

const Home: NextPage<Props> = ({ data, totalPages }: Props) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/products?page=1`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.data,
      totalPages: data.meta.totalPages,
    },
  }
}

export default Home
