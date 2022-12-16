import { ActionMeta } from 'chakra-react-select'
import { difference, length } from 'ramda'
import { useRef } from 'react'
import { UseSelectCallbacksProps } from './types'

interface BasicOption {
  label: string
  value: any
}

export const useSelectCallbacks = <T extends BasicOption>({
  onChange,
  onAdd,
  onRemove,
  isMulti,
}: UseSelectCallbacksProps<T>) => {
  const items = useRef<T[]>([])

  const handleChange = (val: any, event: ActionMeta<T>) => {
    onChange(val, event)
    if (!isMulti) {
      onAdd(val.value)
    } else if (val.length > items.current.length) {
      onAdd(val[length(val) - 1].value)
    } else {
      const removedItem = difference(items.current, val)[0].value
      onRemove(removedItem)
    }
    items.current = val
  }
  return handleChange
}
