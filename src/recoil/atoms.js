import { atom } from 'recoil'

export const unitCostAtom = atom({
  key: 'unitCostAtom',
  default: 0,
})

export const quantityRangeAtom = atom({
  key: 'quantityRangeAtom',
  default: null,
})
export const quantityAtom = atom({
  key: 'quantityAtom',
  default: 0,
})
