import React from 'react'
import { IconProps as ChakraIconProps, Icon } from '@chakra-ui/react'
import { IconProps } from '~lib/types'

type Props = ChakraIconProps & IconProps

export const PlusIcon = ({
  color = 'mediatoolBlue.500',
  ...rest
}: Props) => (
  <Icon viewBox="0 0 32 32" color={ color } { ...rest }>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeWidth={ 1 }
    >
      <line fill="none" stroke="currentColor" x1="16" x2="16" y1="9" y2="23" />
      <line fill="none" stroke="currentColor" x1="23" x2="9" y1="16" y2="16" />
    </g>
  </Icon>
)
