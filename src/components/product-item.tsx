import { BASE_URL } from 'config'
import Image from 'next/image'
import Link from 'next/link'
import { useBreakpoint } from 'src/hooks'
import { Product } from 'src/types'
import { Button, GridItem } from 'src/ui'
import styled from 'styled-components'

type Props = {
  product: Product
}

export const ProductItem = ({ product }: Props) => {
  const isBase = useBreakpoint() === 'bs'

  return (
    <GridItem>
      <ImageBox>
        <Img
          src={`${BASE_URL}${product.image}`}
          alt={product.name}
          width={isBase ? 255 : 394}
          height={isBase ? 255 : 394}
          priority
        />
      </ImageBox>
      <H4>{product.name}</H4>
      <P>{product.shortDescription}</P>

      <Link href={`/${product.id}`} passHref>
        <Button>{`Buy $${product.price}`}</Button>
      </Link>
    </GridItem>
  )
}

const Img = styled(Image)`
  object-fit: cover;
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  height: 394px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    height: 255px;
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
    theme.texts.heading[useBreakpoint()].p400 || theme.texts.heading.md.p400}

  text-align: center;
  color: ${({ theme }) => theme.colors.text['txt-800']};
  margin: 16px 40px 24px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin: 12px 40px 16px;
  }
`
