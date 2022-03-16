import { useField } from 'formik'
import { FC, InputHTMLAttributes } from 'react'
import { useBreakpoint } from 'src/hooks'
import styled from 'styled-components'

export const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => {
  const [field, meta] = useField(props.name ? props.name : '')

  return (
    <Container isValid={meta.touched && !meta.error}>
      <Input {...field} {...props} />
      {children}
    </Container>
  )
}

const Container = styled.label<{ isValid: boolean }>`
  display: flex;
  max-width: 600px;
  border: 2px solid
    ${({ theme, isValid }) =>
      isValid
        ? theme.colors.accent['accent-800']
        : theme.colors.stroke['stroke-100']};
  border-radius: 72px;
  background-color: ${({ theme }) => theme.colors.background['bg-300']};

  height: 84px;
  padding: 6px 6px 6px 32px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    height: 50px;
    padding: 0 24px;
  }
`

const Input = styled.input`
  ${({ theme: { texts } }) =>
    texts.input[useBreakpoint()].value100 || texts.input.md.value100}

  color: ${({ theme }) => theme.colors.text['txt-900']};
  flex-grow: 1;
  width: 10%;
  height: 100%;
  border: none;
  outline: none;
  background-color: inherit;

  padding: 0 10px 0 0;

  @media ${({ theme }) => theme.breakpoints.bs} {
    padding: 0;
  }
`
