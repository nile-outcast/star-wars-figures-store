import { PointFieldsObject } from 'src/theme/types'
import { css } from 'styled-components'

type HeadingKeys = 'h900' | 'h800' | 'h700' | 'h600'

export const heading: PointFieldsObject<HeadingKeys> = {
  bs: {
    h900: css`
      font-weight: 700;
      font-size: 56px;
      line-height: 112%;
    `,

    h800: css`
      font-weight: 700;
      font-size: 44px;
      line-height: 112%;
    `,

    h700: css`
      font-weight: 700;
      font-size: 32px;
      line-height: 112%;
    `,

    h600: css`
      font-weight: 700;
      font-size: 28px;
      line-height: 132%;
    `,
  },

  sm: {
    h600: css`
      font-weight: 700;
      font-size: 32px;
      line-height: 132%;
    `,
  },

  md: {
    h900: css`
      font-weight: 700;
      font-size: 82px;
      line-height: 112%;
    `,

    h800: css`
      font-weight: 700;
      font-size: 64px;
      line-height: 112%;
    `,

    h700: css`
      font-weight: 700;
      font-size: 44px;
      line-height: 112%;
    `,
  },

  lg: {},

  xl: {
    h900: css`
      font-weight: 700;
      font-size: 96px;
      line-height: 112%;
    `,

    h800: css`
      font-weight: 700;
      font-size: 78px;
      line-height: 112%;
    `,

    h700: css`
      font-weight: 700;
      font-size: 56px;
      line-height: 112%;
    `,
  },
}
