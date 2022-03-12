import { BASE_URL } from 'config'
import { GetServerSideProps } from 'next'
import { ProductItem } from 'src/components'
import { Product } from 'src/types'
import { GridContainer } from 'src/ui'

type Props = {
  data: {
    relatedProducts: Product[]
    product: Product
  }
}

const ProductPage = ({ data }: Props) => {
  const { product, relatedProducts } = data

  return (
    <>
      <div>{product.name}</div>
      <GridContainer>
        {relatedProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </GridContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`${BASE_URL}/api/products/${params?.id}`)
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

export default ProductPage
