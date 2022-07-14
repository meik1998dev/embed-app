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
export const packagingAtom = atom({
  key: 'packagingAtom',
  default: 0,
})
export const rightSlaveAtom = atom({
  key: 'rightSlaveAtom',
  default: 0,
})
export const leftSlaveAtom = atom({
  key: 'leftSlaveAtom',
  default: 0,
})
export const internalNeckAtom = atom({
  key: 'internalNeckAtom',
  default: 0,
})
export const printFrontAtom = atom({
  key: 'printFrontAtom',
  default: 0,
})
export const printBackAtom = atom({
  key: 'printBackAtom',
  default: 0,
})

export const deleveryAtom = atom({
  key: 'deleveryAtom',
  default: 0,
})
