import { PointFieldsCSS } from 'src/theme/types'
import { css } from 'styled-components'

const list: PointFieldsCSS = {
  bs: css`
    grid: auto / repeat(1, 1fr);
    gap: 16px 0px;
  `,

  sm: css`
    grid: auto / repeat(2, 1fr);
    gap: 32px 24px;
  `,

  md: css`
    grid: auto/ repeat(2, 1fr);
    gap: 32px 24px;
  `,

  lg: css`
    grid: auto / repeat(3, 1fr);
    gap: 32px 24px;
  `,

  xl: css`
    grid: auto / repeat(3, 1fr);
    gap: 32px 30px;
  `,
}

const card: PointFieldsCSS = {
  bs: css`
    grid: auto / repeat(1, 1fr);
    gap: 32px;
    padding: 50px 0 40px;
  `,

  sm: css`
    grid: auto / repeat(1, 1fr);
    gap: 48px;
    padding: 50px 0 70px;
  `,

  md: css`
    grid: auto / repeat(1, 1fr);
    gap: 48px;
    padding: 50px 0 70px;
  `,

  lg: css`
    grid: auto / repeat(1, 1fr);
    gap: 48px;
    padding: 50px 20px 70px;
  `,

  xl: css`
    grid: auto / repeat(2, 1fr);
    gap: 60px;
    padding: 50px 60px 70px;
  `,
}

export const grid = {
  list,
  card,
}
