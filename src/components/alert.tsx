import { useBreakpoint } from 'src/hooks'
import { Button, ProductContainer } from 'src/ui'
import styled from 'styled-components'

type Props = {
  message: string
  onClose: () => void
}

export const Alert = ({ message, onClose }: Props) => (
  <Wrapper>
    <Container>
      <P>{message}</P>
      <AlertButton type="button" onClick={onClose}>
        Ok
      </AlertButton>
    </Container>
  </Wrapper>
)

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  margin: auto;
  height: 100%;
  width: 100%;
  z-index: 10;
`

const Container = styled(ProductContainer)`
  ${({ theme }) => theme.effects.shadow.sh200};

  background-color: ${({ theme }) => theme.colors.background['bg-300']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 40px 40px 32px;

  @media ${({ theme }) => theme.breakpoints.bs} {
    margin: auto 16px;
    padding: 32px 40px 24px;
  }
`

const AlertButton = styled(Button)`
  margin-top: 32px;
  @media ${({ theme }) => theme.breakpoints.bs} {
    margin-top: 24px;
  }
`

const P = styled.p`
  ${({ theme }) =>
    theme.texts.paragraph[useBreakpoint()].p800 ||
    theme.texts.paragraph.md.p800}

  text-align: center;
  margin: 0;
`
