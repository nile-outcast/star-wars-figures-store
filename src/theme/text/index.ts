import { COLORS } from '..'
import { button } from './button'
import { heading } from './heading'
import { input } from './input'
import { paragraph } from './paragraph'

export type TextFields = {
  bs: { [key: string]: string }
  sm: { [key: string]: string }
  md: { [key: string]: string }
  lg: { [key: string]: string }
  xl: { [key: string]: string }
}

type TextType = {
  heading: TextFields
  paragraph: TextFields
  button: TextFields
  input: TextFields
}

export const TEXT: TextType = {
  heading: heading,
  paragraph: paragraph,
  button: button,
  input: input,
}

TEXT.heading.sm = {
  ...heading.md,
  h600: `
    font-weight: 700;
    font-size: 32px;
    line-height: 132%;
    color: ${COLORS.text['txt-900']};
  `,
}
TEXT.heading.lg = heading.md

TEXT.paragraph.sm = paragraph.md
TEXT.paragraph.lg = paragraph.md
TEXT.paragraph.xl = {
  ...paragraph.md,
  p900: `
    font-weight: 600;
    font-size: 32px;
    line-height: 142%;
    color: ${COLORS.text['txt-900']};
  `,
}

TEXT.button.sm = button.md
TEXT.button.lg = button.md
TEXT.button.xl = button.md

TEXT.input.sm = input.md
TEXT.input.lg = input.md
TEXT.input.xl = input.md
