import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { ToggleYearsButton } from '../../components'

import { Flex } from '../../../flex'
import { IconButton } from '../../../icon-button'

interface Props {
  month: number
  year: number
  toggleYears(): void
  prev: Record<string, any>
  next: Record<string, any>
}

export const Controls = ({
  month,
  year,
  toggleYears,
  prev,
  next,
}: Props) => (
  <Flex justifyContent="space-between">
    <ToggleYearsButton
      month={ month }
      year={ year }
      toggleYears={ toggleYears }
    />
    <Flex alignItems="center">
      <IconButton
        aria-label="Previous month"
        icon={ <ChevronLeftIcon /> }
        variant="ghost"
        size="sm"
        fontSize="sm"
        { ...prev }
        disabled={ year === 2012 && month === 0 }
      />
      <IconButton
        aria-label="Next month"
        icon={ <ChevronRightIcon /> }
        variant="ghost"
        size="sm"
        fontSize="sm"
        { ...next }
      />
    </Flex>
  </Flex>
)
