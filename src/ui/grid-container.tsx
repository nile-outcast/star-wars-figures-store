import { FC } from 'react'
import styled from 'styled-components'

export const GridContainer: FC = ({ children }) => <Grid>{children}</Grid>

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
