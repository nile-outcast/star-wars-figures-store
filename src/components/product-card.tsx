/* eslint-disable no-console */
import { BASE_URL } from 'config'
import { Form, Formik, FormikHelpers } from 'formik'
import { useCallback, useState } from 'react'
import { Alert } from 'src/components'
import { useBreakpoint } from 'src/hooks'
import { PreOrderSchema } from 'src/schemas'
import { Product } from 'src/types'
import { Button, Image, ProductContainer, TextInput } from 'src/ui'
import { preOrderProduct } from 'src/utils'
import styled from 'styled-components'

type Props = {
  product: Product
}

type Values = { email: string }

const initialValues: Values = {
  email: '',
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
        <Formik
          initialValues={initialValues}
          validationSchema={PreOrderSchema}
          onSubmit={handleSubmit}>
          {({ values, handleChange }) => (
            <FormBox>
              <TextInput
                value={values.email}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email">
                {!isBase && <Button type="submit">{`Pre-order Now`}</Button>}
              </TextInput>

              {isBase && (
                <ButtonOnly type="submit">{`Pre-order Now`}</ButtonOnly>
              )}
            </FormBox>
          )}
        </Formik>
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
const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    align-items: center;
    margin-top: 32px;
  }
`
const ButtonOnly = styled(Button)`
  margin-top: 24px;
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
