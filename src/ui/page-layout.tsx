import { FC } from 'react'
import { useBreakpoint } from 'src/hooks'
import styled from 'styled-components'

export const PageLayout: FC = ({ children }) => (
  <PageContainer>{children}</PageContainer>
)

const PageContainer = styled.div`
  ${({ theme }) => theme.layouts.page[useBreakpoint()]}
  margin: 0 auto;
  max-width: 1920px;
`
