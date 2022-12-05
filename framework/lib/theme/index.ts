import {
  ThemeOverride,
  extendTheme,
} from '@chakra-ui/react'
import {
  coreBorderRadius,
  coreBoxShadow,
  coreFontSize,
  coreFontWeight,
  coreLineHeight,
  coreSizing,
  coreSpacing,
  coreZIndex,
  palette,
} from '@mediatool/tokens'
import { scrollbarStyles } from './global/scrollbar'
import * as components from './components'
import { WebappSkin } from './skins'

const overrides: ThemeOverride = {
  config: {
    cssVarPrefix: '',
  },
  semanticTokens: {
    colors: {
      'chakra-body-text': {
        _light: 'text.default',
        _dark: 'text.inverted',
      },
    },
  },
  styles: {
    global: {
      body: {
        height: '100%',
      },
      '#app': {
        height: '100%',
      },
      ...scrollbarStyles,
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  components: { ...components },
  colors: palette,
  zIndices: coreZIndex,
  sizes: coreSizing,
  space: coreSpacing,
  fontWeights: coreFontWeight,
  shadows: coreBoxShadow,
  fontSizes: coreFontSize,
  lineHeights: coreLineHeight,
  radii: coreBorderRadius,
}

export const webappTheme = extendTheme(overrides, WebappSkin)
