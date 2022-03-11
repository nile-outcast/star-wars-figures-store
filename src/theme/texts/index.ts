import { PointFieldsObject } from '../types'
import { button } from './button'
import { heading } from './heading'
import { input } from './input'
import { paragraph } from './paragraph'

type TextsType = {
  heading: PointFieldsObject
  paragraph: PointFieldsObject
  button: PointFieldsObject
  input: PointFieldsObject
}

export const TEXTS: TextsType = {
  heading: heading,
  paragraph: paragraph,
  button: button,
  input: input,
}
