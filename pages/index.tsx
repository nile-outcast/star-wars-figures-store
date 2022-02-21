import type { GetStaticProps, NextPage } from 'next'
import { Product } from 'src/types'

type Props = {
  data: Product[]
  totalPages: number
}

const Home: NextPage<Props> = ({ data, totalPages }: Props) => {
  return <div></div>
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
