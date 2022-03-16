import PropTypes from 'prop-types'
import { ButtonHTMLAttributes, FC, forwardRef } from 'react'
import { useBreakpoint } from 'src/hooks'
import styled from 'styled-components'

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => (
  <StyledButton ref={ref} {...props}>
    {children}
  </StyledButton>
))

Button.displayName = 'Button'
Button.propTypes = {
  children: PropTypes.node.isRequired,
}

const StyledButton = styled.button`
  ${({ theme: { texts } }) =>
    texts.button[useBreakpoint()].btn100 || texts.button.md.btn100};
  ${({ theme }) => theme.effects.shadow.sh200};

  width: max-content;

  color: ${({ theme }) => theme.colors.text['txt-100']};
  background: ${({ theme }) => theme.colors.accent['accent-900']};
  border: none;
  border-radius: 50px;
  padding: 22px 32px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent['accent-800']};
  }

  @media ${({ theme }) => theme.breakpoints.bs} {
    padding: 16px 24px;
  }
`
