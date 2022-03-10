import { Logo } from 'src/ui/icons'
import styled from 'styled-components'

export const Header = () => (
  <LogoBox>
    <Logo />
  </LogoBox>
)

const LogoBox = styled.header`
  display: flex;
  justify-content: center;
  padding: 34px 0 35px 0;

  @media ${({ theme }) => theme.breakpoints.bs} {
    padding: 24px 0 25px 0;
  }
`
