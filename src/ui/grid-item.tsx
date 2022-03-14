import { FC } from 'react'
import styled from 'styled-components'

export const GridItem: FC = ({ children }) => <ItemBox>{children}</ItemBox>

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  border-radius: 48px;
  background-color: ${({ theme }) => theme.colors.background['bg-200']};

  &:hover {
    ${({ theme }) => theme.effects.shadow.sh100};
  }

  @media ${({ theme }) => theme.breakpoints.bs} {
    padding: 24px 0px;
  }
`
