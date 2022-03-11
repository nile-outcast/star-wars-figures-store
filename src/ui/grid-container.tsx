import { FC } from 'react'
import { useBreakpoint } from 'src/hooks'
import styled from 'styled-components'

export const GridContainer: FC = ({ children }) => <Grid>{children}</Grid>

const Grid = styled.div`
  display: grid;
  align-items: start;
  ${({ theme }) => theme.layouts.grid[useBreakpoint()]}
`
