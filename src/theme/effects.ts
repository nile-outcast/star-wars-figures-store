import { css } from 'styled-components'

export const EFFECTS = {
  shadow: {
    sh100: css`
      box-shadow: 0px 20px 32px rgba(0, 0, 0, 0.12);
    `,

    sh200: css`
      box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.32);
    `,
  },
} as const
