import { HTMLAttributes } from 'react'
import { useBreakpoint } from 'src/hooks'
import styled from 'styled-components'

export const Loader = (props: HTMLAttributes<HTMLDivElement>) => (
  <LoaderBox {...props}>{'l o a d i n g . . .'}</LoaderBox>
)

const LoaderBox = styled.div`
  ${({ theme }) =>
    theme.texts.heading[useBreakpoint()].h600 || theme.texts.heading.sm.h600}

  display: flex;
  justify-content: center;

  &[data-with-margin='true'] {
    margin-top: 40px;

    @media ${({ theme }) => theme.breakpoints.bs} {
      margin-top: 16px;
    }
  }
`
