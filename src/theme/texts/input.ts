import { PointFieldsObject } from 'src/theme/types'
import { css } from 'styled-components'

type InputKeys = 'value100'

export const input: PointFieldsObject<InputKeys> = {
  bs: {
    value100: css`
      font-family: Spartan, sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 142%;
    `,
  },
  sm: {},
  md: {
    value100: css`
      font-family: Spartan, sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 142%;
    `,
  },
  lg: {},
  xl: {},
}
