import { BASE_URL } from 'config'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ProductCard, RelatedProducts } from 'src/components'
import { PageResponseType, Product } from 'src/types'

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

export const getStaticPaths: GetStaticPaths = async () => {
  const fetcher = async (page: number): Promise<Product[]> => {
    const res = await fetch(`${BASE_URL}/api/products?page=${page}`)
    const { data, meta }: PageResponseType = await res.json()

    if (page === meta.totalPages) {
      return data
    }

    return data.concat(await fetcher(page + 1))
  }

  const data = await fetcher(1)

  const paths = data.map(product => ({
    params: { id: product.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
