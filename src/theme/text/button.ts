import { COLORS } from '..'
import { TextFields } from '.'

export const button: TextFields = {
  bs: {
    btn100: `
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        color: ${COLORS.text['txt-900']};
      `,
  },
  sm: {},
  md: {
    btn100: `
        font-weight: 700;
        font-size: 24px;
        line-height: 100%;
        color: ${COLORS.text['txt-900']};
      `,
  },
  lg: {},
  xl: {},
}
