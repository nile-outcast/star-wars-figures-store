import { PointFieldsObject } from 'src/theme/types'
import { css } from 'styled-components'

type ParagraphKeys = 'p900' | 'p800' | 'p400'

export const paragraph: PointFieldsObject<ParagraphKeys> = {
  bs: {
    p900: css`
      font-weight: 600;
      font-size: 24px;
      line-height: 142%;
    `,

    p800: css`
      font-weight: 600;
      font-size: 21px;
      line-height: 142%;
    `,

    p400: css`
      font-weight: 500;
      font-size: 16px;
      line-height: 154%;
    `,
  },

  sm: {},

  md: {
    p900: css`
      font-weight: 600;
      font-size: 28px;
      line-height: 142%;
    `,

    p800: css`
      font-weight: 500;
      font-size: 24px;
      line-height: 142%;
    `,

    p400: css`
      font-weight: 500;
      font-size: 18px;
      line-height: 154%;
    `,
  },

  lg: {},

  xl: {
    p900: css`
      font-weight: 600;
      font-size: 32px;
      line-height: 142%;
    `,
  },
}
