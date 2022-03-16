import { BASE_URL } from 'config'
import Link from 'next/link'
import { useBreakpoint } from 'src/hooks'
import { Product } from 'src/types'
import { Button, Image, ProductContainer } from 'src/ui'
import styled from 'styled-components'

type Props = {
  product: Product
}

export const ProductItem = ({ product }: Props) => {
  const size = useBreakpoint() === 'bs' ? 255 : 394

  return (
    <ProductContainer>
      <Content>
        <Image
          src={`${BASE_URL}${product.image}`}
          alt={product.name}
          size={size}
          priority
        />
        <H4>{product.name}</H4>
        <P>{product.shortDescription}</P>

        <Link href={`/${product.id}`} passHref>
          <Button>{`Buy $${product.price}`}</Button>
        </Link>
      </Content>
    </ProductContainer>
  )
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;

  @media ${({ theme }) => theme.breakpoints.bs} {
    padding: 24px 0px;
  }
`

const H4 = styled.h4`
  ${({ theme }) =>
    theme.texts.heading[useBreakpoint()].h600 || theme.texts.heading.sm.h600}

  text-align: center;
  color: ${({ theme }) => theme.colors.text['txt-900']};
  margin: 32px 40px 0;
`

const P = styled.p`
  ${({ theme }) =>
    theme.texts.paragraph[useBreakpoint()].p400 ||
    theme.texts.paragraph.md.p400}

  text-align: center;
  color: ${({ theme }) => theme.colors.text['txt-800']};
  margin: 16px 40px 24px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin: 12px 40px 16px;
  }
`
