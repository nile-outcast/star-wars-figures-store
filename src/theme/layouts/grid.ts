import { PointFieldsString } from '../types'

export const grid: PointFieldsString = {
  bs: `
    grid: auto / repeat(1, 1fr);
    gap: 16px 0px;
  `,

  sm: `
    grid: auto / repeat(2, 1fr);
    gap: 32px 24px;
  `,

  md: `
    grid: auto/ repeat(2, 1fr);
    gap: 32px 24px;
  `,

  lg: `
    grid: auto / repeat(3, 1fr);
    gap: 32px 24px;
  `,

  xl: `
    grid: auto / repeat(3, 1fr);
    gap: 32px 30px;
  `,
}
