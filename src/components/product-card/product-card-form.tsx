import { Form, Formik, FormikHelpers } from 'formik'
import { useBreakpoint } from 'src/hooks'
import { PreOrderSchema } from 'src/schemas'
import { Button, TextInput } from 'src/ui'
import styled from 'styled-components'

import { Values } from './types'

type Props = {
  handleSubmit: (
    values: Values,
    actions: FormikHelpers<Values>,
  ) => Promise<void>
}

const initialValues: Values = {
  email: '',
}

export const ProductCardForm = ({ handleSubmit }: Props) => {
  const isBase = useBreakpoint() === 'bs'

  return (
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

          {isBase && <ButtonOnly type="submit">{`Pre-order Now`}</ButtonOnly>}
        </FormBox>
      )}
    </Formik>
  )
}

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
