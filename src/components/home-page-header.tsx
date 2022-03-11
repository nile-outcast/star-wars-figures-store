import { useBreakpoint } from 'src/hooks'
import styled from 'styled-components'

export const HomePageHeader = () => (
  <HomeHeader>
    <H1>Star Wars Figures</H1>
    <P>Find the latest products for the biggest fans of the iconic saga.</P>
  </HomeHeader>
)

const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  ${({ theme: { texts } }) =>
    texts.heading[useBreakpoint()].h900 || texts.heading.md.h900};
  text-align: center;
  margin: 160px 0 0 0;
  max-width: 600px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin-top: 125px;
  }
`

const P = styled.p`
  ${({ theme: { texts } }) =>
    texts.paragraph[useBreakpoint()].p900 || texts.paragraph.md.p900};
  margin: 48px 0 188px 0;
  text-align: center;
  max-width: 650px;

  @media ${({ theme }) => theme.breakpoints.xl} {
    max-width: 780px;
    margin-bottom: 146px;
  }

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin: 32px 0 147px 0;
  }
`
