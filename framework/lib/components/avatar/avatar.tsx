import React from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/react'
import { BusinessContactDuo, UserSquareDuo } from '@mediatool/icons'
import { Icon } from '../icon'
import { Box } from '../box'
import { getInitials } from '../../utilities'
import { AvatarProps } from './types'

export const Avatar = ({
  variant = 'square',
  name,
  image,
  ...rest
}: AvatarProps) => {
  const { container, text, userImage, icon } = useMultiStyleConfig('Avatar', {
    variant,
    image,
    ...rest,
  })

  return (
    <Box __css={ container } data-testid="avatar-test-id">
      { image
        ? (
          <chakra.img
            alt={ name }
            src={ image }
            sx={ userImage }
          />
        ) : name
          ? (
            <chakra.span sx={ text }>
              { getInitials(name) }
            </chakra.span>
          )
          : (
            <Icon
              as={ variant === 'square' ? UserSquareDuo : BusinessContactDuo }
              sx={ icon }
              aria-label="user-avatar"
            />
          ) }

    </Box>
  )
}
