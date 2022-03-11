import 'styled-components'

import { BREAKPOINTS, COLORS, EFFECTS, LAYOUTS, TEXTS } from 'src/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof BREAKPOINTS
    colors: typeof COLORS
    effects: typeof EFFECTS
    layouts: typeof LAYOUTS
    texts: typeof TEXTS
  }
}
