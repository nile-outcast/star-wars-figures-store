import { FlattenSimpleInterpolation } from 'styled-components'

export type PointKeys = 'bs' | 'sm' | 'md' | 'lg' | 'xl'

type PointFields<T> = Readonly<Record<PointKeys, T>>

export type PointFieldsObject<K extends string> = PointFields<
  Partial<Record<K, FlattenSimpleInterpolation>>
>

export type PointFieldsCSS = PointFields<FlattenSimpleInterpolation>
