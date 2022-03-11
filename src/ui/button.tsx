import { ButtonHTMLAttributes, FC } from 'react'
import { useBreakpoint } from 'src/hooks'
import styled from 'styled-components'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => <StyledButton {...props}>{children}</StyledButton>

const StyledButton = styled.button`
  ${({ theme: { texts } }) =>
    texts.button[useBreakpoint()].btn100 || texts.button.md.btn100};
  ${({ theme }) => theme.effects.shadow.sh200};

  color: ${({ theme }) => theme.colors.text['txt-100']};
  background: ${({ theme }) => theme.colors.accent['accent-900']};
  border: none;
  border-radius: 50px;
  padding: 22px 32px;

  &:hover {
    background: ${({ theme }) => theme.colors.accent['accent-800']};
  }

  @media ${({ theme }) => theme.breakpoints.bs} {
    padding: 16px 24px;
  }
`
