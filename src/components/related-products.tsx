import { ProductItem } from 'src/components'
import { useBreakpoint } from 'src/hooks'
import { Product } from 'src/types'
import { GridContainer } from 'src/ui'
import styled from 'styled-components'

type Props = {
  relatedProducts: Product[]
}

export const RelatedProducts = ({ relatedProducts }: Props) => (
  <>
    <H3>Related Figures</H3>
    <GridContainer>
      {relatedProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </GridContainer>
  </>
)

const H3 = styled.h3`
  ${({ theme }) =>
    theme.texts.heading[useBreakpoint()].h700 || theme.texts.heading.md.h700}

  margin: 0 0 32px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    text-align: center;
    margin-bottom: 24px;
  }
`
