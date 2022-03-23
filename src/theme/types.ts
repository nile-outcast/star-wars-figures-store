import { FlattenSimpleInterpolation } from 'styled-components'

export type PointFields<T> = {
  bs: T
  sm: T
  md: T
  lg: T
  xl: T
}

export type PointFieldsObject = PointFields<{
  [key: string]: FlattenSimpleInterpolation
}>

export type PointFieldsCSS = PointFields<FlattenSimpleInterpolation>
