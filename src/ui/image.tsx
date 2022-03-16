import NextImage, { ImageProps } from 'next/image'
import styled from 'styled-components'

type Props = ImageProps & {
  size: number
}

export const Image = ({ size, ...props }: Props) => (
  <ImageBox size={size}>
    <Img {...props} width={size} height={size} />
  </ImageBox>
)

const ImageBox = styled.div<{ size: number }>`
  display: flex;
  justify-content: center;
  height: ${({ size }) => size}px;
`

const Img = styled(NextImage)`
  object-fit: cover;
`
