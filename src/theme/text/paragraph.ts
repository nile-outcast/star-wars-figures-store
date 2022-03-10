import { COLORS } from '..'
import { TextFields } from '.'

export const paragraph: TextFields = {
  bs: {
    p900: `
        font-weight: 600;
        font-size: 24px;
        line-height: 142%;
        color: ${COLORS.text['txt-900']};
      `,

    p800: `
        font-weight: 600;
        font-size: 21px;
        line-height: 142%;
        color: ${COLORS.text['txt-900']};
    `,

    p400: `
        font-weight: 500;
        font-size: 16px;
        line-height: 154%;
        color: ${COLORS.text['txt-900']};
      `,
  },

  sm: {},

  md: {
    p900: `
        font-weight: 600;
        font-size: 28px;
        line-height: 142%;
        color: ${COLORS.text['txt-900']};
      `,

    p800: `
        font-weight: 500;
        font-size: 24px;
        line-height: 142%;
        color: ${COLORS.text['txt-900']};
      `,

    p400: `
        font-weight: 500;
        font-size: 18px;
        line-height: 154%;
        color: ${COLORS.text['txt-900']};
      `,
  },

  lg: {},

  xl: {},
}
