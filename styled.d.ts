import 'styled-components'

import { BREAKPOINTS, COLORS, EFFECTS, TEXT } from 'src/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS
    breakpoints: typeof BREAKPOINTS
    effects: typeof EFFECTS
    text: typeof TEXT
  }
}
