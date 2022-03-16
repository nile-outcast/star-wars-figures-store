import { BASE_URL } from 'config'
import { GetServerSideProps } from 'next'
import { ProductCard, RelatedProducts } from 'src/components'
import { Product } from 'src/types'

type Props = {
  data: {
    product: Product
    relatedProducts: Product[]
  }
}

const ProductPage = ({ data }: Props) => {
  const { product, relatedProducts } = data

  return (
    <>
      <ProductCard product={product} />
      <RelatedProducts relatedProducts={relatedProducts} />
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
