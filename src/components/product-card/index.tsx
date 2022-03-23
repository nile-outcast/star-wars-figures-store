import { BASE_URL } from 'config'
import { FormikHelpers } from 'formik'
import { useCallback, useState } from 'react'
import { Alert } from 'src/components'
import { useBreakpoint } from 'src/hooks'
import { Product } from 'src/types'
import { Image, ProductContainer } from 'src/ui'
import { preOrderProduct } from 'src/utils'
import styled from 'styled-components'

import { ProductCardForm } from './product-card-form'
import { Values } from './types'

type Props = {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  const isBase = useBreakpoint() === 'bs'
  const size = isBase ? 450 : 800

  const [alertMessage, setAlertMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const closeAlert = useCallback(() => setShowAlert(false), [])

  const handleSubmit = useCallback(
    async (values: Values, actions: FormikHelpers<Values>) => {
      try {
        const { message, error } = await preOrderProduct(
          product.id,
          values.email,
        )

        error ? setAlertMessage(error) : message && setAlertMessage(message)
      } catch (e) {
        setAlertMessage('Something is wrong, try again later')
      } finally {
        setShowAlert(true)
        actions.setSubmitting(false)
        actions.resetForm()
      }
    },
    [product.id],
  )

  return (
    <Content>
      <Image
        src={`${BASE_URL}${product.image}`}
        alt={product.name}
        size={size}
        priority
      />

      <Description>
        <H2>{product.name}</H2>
        <P>{product.description}</P>
        <ProductCardForm handleSubmit={handleSubmit} />
      </Description>

      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </Content>
  )
}

const Content = styled(ProductContainer)`
  display: grid;
  ${({ theme }) => theme.layouts.grid.card[useBreakpoint()]}
  margin-bottom: 88px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin-bottom: 72px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  margin: 0 40px;
  text-align: center;

  @media ${({ theme }) => theme.breakpoints.xl} {
    align-items: flex-start;
    max-width: 640px;
    margin: 0;
    text-align: start;
  }

  & > :last-child {
    text-align: start;
  }
`

const H2 = styled.h2`
  ${({ theme }) =>
    theme.texts.heading[useBreakpoint()].h800 || theme.texts.heading.md.h800}

  margin: 0;
`

const P = styled.p`
  ${({ theme }) =>
    theme.texts.paragraph[useBreakpoint()].p800 ||
    theme.texts.paragraph.md.p800}

  margin: 32px 0 0;
`
