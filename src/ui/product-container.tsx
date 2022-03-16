import { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'

export const ProductContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => <Container {...props}>{children}</Container>

const Container = styled.div`
  border-radius: 48px;
  background-color: ${({ theme }) => theme.colors.background['bg-200']};

  &:hover {
    ${({ theme }) => theme.effects.shadow.sh100};
  }
`
