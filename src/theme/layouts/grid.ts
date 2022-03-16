import { PointFieldsString } from '../types'

const list: PointFieldsString = {
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

const card: PointFieldsString = {
  bs: `
    grid: auto / repeat(1, 1fr);
    gap: 32px;
    padding: 50px 0 40px;
  `,

  sm: `
    grid: auto / repeat(1, 1fr);
    gap: 48px;
    padding: 50px 0 70px;
  `,

  md: `
    grid: auto / repeat(1, 1fr);
    gap: 48px;
    padding: 50px 0 70px;
  `,

  lg: `
    grid: auto / repeat(1, 1fr);
    gap: 48px;
    padding: 50px 20px 70px;
  `,

  xl: `
    grid: auto / repeat(2, 1fr);
    gap: 60px;
    padding: 50px 60px 70px;
  `,
}

export const grid = {
  list: list,
  card: card,
}
