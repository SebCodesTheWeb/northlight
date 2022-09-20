import { ComponentMultiStyleConfig } from '@chakra-ui/react'
import { borderRadius, color, sizing } from '@mediatool/tokens'

export const Avatar: ComponentMultiStyleConfig = {
  parts: [ 'container', 'text' ],
  sizes: {
    '2xs': {
      container: {
        width: sizing.avatar['2xs'],
        height: sizing.avatar['2xs'],
      },
      text: {
        lineHeight: sizing.avatar['2xs'],
      },
    },
    xs: {
      container: {
        width: sizing.avatar.xs,
        height: sizing.avatar.xs,
      },
      text: {
        lineHeight: sizing.avatar.xs,
      },
    },
    sm: {
      container: {
        width: sizing.avatar.sm,
        height: sizing.avatar.sm,
      },
      text: {
        lineHeight: sizing.avatar.sm,
      },
    },
    md: {
      container: {
        width: sizing.avatar.md,
        height: sizing.avatar.md,
      },
      text: {
        lineHeight: sizing.avatar.md,
      },
    },
    lg: {
      container: {
        width: sizing.avatar.lg,
        height: sizing.avatar.lg,
      },
      text: {
        lineHeight: sizing.avatar.lg,
      },
    },
    xl: {
      container: {
        width: sizing.avatar.xl,
        height: sizing.avatar.xl,
      },
      text: {
        lineHeight: sizing.avatar.xl,
      },
    },
    '2xl': {
      container: {
        width: sizing.avatar['2xl'],
        height: sizing.avatar['2xl'],
      },
      text: {
        lineHeight: sizing.avatar['2xl'],
      },
    },

  },
  baseStyle: ({ image }) => ({
    container: {
      bgColor: image ? color.background.avatar.image : color.background.avatar.default,
      color: color.text.inverted,
      display: 'grid',
      placeItems: 'center',
    },

  }),
  variants: {
    square: {
      container: {
        borderRadius: borderRadius.avatar.square,
        '> img': {
          borderRadius: borderRadius.avatar.square,
        },
      },
    },
    rounded: {
      container: {
        borderRadius: borderRadius.avatar.rounded,
        '> img': {
          borderRadius: borderRadius.avatar.rounded,
        },
      },
    },
  },
}
