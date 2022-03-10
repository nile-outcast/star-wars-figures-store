import styled from 'styled-components'

import { useBreakpoint } from './hooks/use-breakpoint'
import { Logo } from './ui/icons/logo'

export const Header = () => (
  <HeaderTag>
    <LogoBox>
      <Logo />
    </LogoBox>
    <H1>Star Wars Figures</H1>
    <P>Find the latest products for the biggest fans of the iconic saga.</P>
  </HeaderTag>
)

const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LogoBox = styled.div`
  padding: 34px 0 35px 0;

  @media ${({ theme }) => theme.breakpoints.bs} {
    padding: 24px 0 25px 0;
  }
`

const H1 = styled.h1`
  ${({ theme }) => theme.text.heading[useBreakpoint()].h900};
  text-align: center;
  margin: 160px 0 0 0;
  max-width: 600px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin-top: 125px;
  }
`

const P = styled.p`
  margin: 48px 0 146px 0;
  text-align: center;
  max-width: 780px;
  ${({ theme }) => theme.text.paragraph[useBreakpoint()].p900};

  @media (max-width: 1400px) and (min-width: 425px) {
    max-width: 650px;
    margin-bottom: 188px;
  }

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin: 32px 0 147px 0;
  }
`
