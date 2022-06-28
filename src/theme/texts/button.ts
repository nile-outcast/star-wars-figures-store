import { PointFieldsObject } from 'src/theme/types'
import { css } from 'styled-components'

type ButtonKeys = 'btn100'

export const button: PointFieldsObject<ButtonKeys> = {
  bs: {
    btn100: css`
      font-family: Rubik, sans-serif;
      font-weight: 700;
      font-size: 18px;
      line-height: 100%;
    `,
  },
  sm: {},
  md: {
    btn100: css`
      font-family: Rubik, sans-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 100%;
    `,
  },
  lg: {},
  xl: {},
}
