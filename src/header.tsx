import styled from 'styled-components'

import { Logo } from './ui/icons/logo'

export const Header = () => (
  <HeaderTag>
    <LogoBox>
      <Logo />
    </LogoBox>
    <Title>Star Wars Figures</Title>
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
  padding: 24px 0 25px 0;

  @media (min-width: 768px) {
    padding: 34px 0 35px 0;
  }
`

const Title = styled.h1`
  text-align: center;
  margin: 160px 0 0 0;
  font-size: 96px;
  font-weight: 700;
  max-width: 780px;

  @media (max-width: 1400px) and (min-width: 768px) {
    font-size: 82px;
    max-width: 650px;
  }

  @media (max-width: 767px) {
    margin-top: 125px;
    font-size: 56px;
    max-width: 480px;
  }
`

const P = styled.p`
  margin: 48px 0 146px 0;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  max-width: 780px;

  @media (max-width: 1400px) and (min-width: 768px) {
    font-size: 28px;
    max-width: 650px;
    margin-bottom: 188px;
  }

  @media (max-width: 767px) {
    margin: 32px 0 147px 0;
    font-size: 24px;
    max-width: 480px;
  }
`
