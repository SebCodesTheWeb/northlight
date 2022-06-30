import { RadioGroupProps as ChakraRadioGroupProps, RadioProps as ChakraRadioProps } from '@chakra-ui/react'
import { FieldValidator } from 'formik'
import React, { ChangeEvent } from 'react'

type StackingDirection = 'row' | 'column'

export type RadioProps =
  ChakraRadioProps
  & {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string
  }

export type RadioFieldProps =
  ChakraRadioProps
  & {
    value: string
  }

export type RadioGroupProps =
    ChakraRadioGroupProps
    & {
      direction?: StackingDirection
    }

export type RadioFieldGroupProps =
    ChakraRadioGroupProps
    & {
      direction?: StackingDirection
      name: string
      label: string
      validate?: FieldValidator
      isRequired?: boolean
      value?: string
    }
