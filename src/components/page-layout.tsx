import { FC } from 'react'
import styled from 'styled-components'

export const PageLayout: FC = ({ children }) => (
  <PageContainer>{children}</PageContainer>
)

const PageContainer = styled.div`
  margin: 0 auto;
  padding: 0 160px;
  max-width: 1920px;

  @media ${({ theme }) => theme.breakpoints.lg} {
    padding: 0 40px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`
