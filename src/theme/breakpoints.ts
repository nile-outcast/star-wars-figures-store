import { PointKeys } from 'src/theme/types'

export const BREAKPOINTS: Readonly<Record<PointKeys, string>> = {
  bs: '(max-width: 525px)',
  sm: '(max-width: 768px) and (min-width: 526px)',
  md: '(max-width: 980px) and (min-width: 769px)',
  lg: '(max-width: 1400px) and (min-width: 981px)',
  xl: '(min-width: 1401px)',
}
