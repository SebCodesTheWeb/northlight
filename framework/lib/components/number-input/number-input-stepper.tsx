import React from 'react'
import {
  NumberInputStepper as ChakraNumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '@chakra-ui/react'
import { ChevronDownSolid, ChevronUpSolid } from '@mediatool/icons'
import { Icon } from '../icon'
import { HStack } from '../stack'
import { Divider } from '../divider'
import { P } from '../typography'
import { Center } from '../center'
import { NumberInputStepperProps } from './types'

export const NumberInputStepper = ({
  includePercentage = false,
}: NumberInputStepperProps) => (
  <ChakraNumberInputStepper>
    <HStack alignItems="center" h="full">
      { includePercentage && (
        <Center bgColor="gray.50" borderRadius="md" boxSize="6">
          <P>%</P>
        </Center>
      ) }
      <Divider orientation="vertical" h="50%" />
      <NumberIncrementStepper border="none">
        <Icon
          as={ ChevronUpSolid }
          color="icon.input-stepper.default"
          boxSize={ 4 }
        />
      </NumberIncrementStepper>
      <NumberDecrementStepper>
        <Icon
          as={ ChevronDownSolid }
          color="icon.input-stepper.default"
          boxSize={ 4 }
        />
      </NumberDecrementStepper>
    </HStack>
  </ChakraNumberInputStepper>
)
