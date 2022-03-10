import { COLORS } from '..'
import { TextFields } from '.'

export const heading: TextFields = {
  bs: {
    h900: `
        font-weight: 700;
        font-size: 56px;
        line-height: 112%;
        color: ${COLORS.text['txt-900']};
      `,

    h600: `
        font-weight: 700;
        font-size: 28px;
        line-height: 132%;
        color: ${COLORS.text['txt-900']};
      `,
  },

  sm: {},

  md: {
    h900: `
        font-weight: 700;
        font-size: 82px;
        line-height: 112%;
        color: ${COLORS.text['txt-900']};
      `,

    h800: `
        font-weight: 700;
        font-size: 64px;
        line-height: 112%;
        color: ${COLORS.text['txt-900']};
      `,

    h700: `
        font-weight: 700;
        font-size: 44px;
        line-height: 112%;
        color: ${COLORS.text['txt-900']};
      `,
  },

  lg: {},

  xl: {
    h900: `
        font-weight: 700;
        font-size: 96px;
        line-height: 112%;
        color: ${COLORS.text['txt-900']};
      `,

    h800: `
        font-weight: 700;
        font-size: 78px;
        line-height: 112%;
        color: ${COLORS.text['txt-900']};
      `,

    h700: `
        font-weight: 700;
        font-size: 56px;
        line-height: 112%;
        color: ${COLORS.text['txt-900']};
      `,
  },
}
