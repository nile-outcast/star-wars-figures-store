type PointFields<T> = {
  bs: T
  sm: T
  md: T
  lg: T
  xl: T
}

export type PointFieldsObject = PointFields<{ [key: string]: string }>

export type PointFieldsString = PointFields<string>
