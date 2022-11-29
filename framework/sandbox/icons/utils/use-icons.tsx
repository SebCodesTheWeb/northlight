import * as mediatoolIcons from '@mediatool/icons'
import { compose, filter, keys, map, prop, test } from 'ramda'
import { IconComponent } from './types'

export const useIcons = (opt?: 'duo' | 'solid'): IconComponent[] => {
  const labels = keys(mediatoolIcons)
  const icons = map((icon) => ({
    label: icon,
    component: mediatoolIcons[icon],
  }), labels)

  return opt
    ? filter(compose(test(new RegExp(opt, 'i')), prop('label')), icons)
    : icons
}
