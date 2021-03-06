/* eslint-disable radix */
/* eslint-disable no-fallthrough */
import React from 'react'
import { useRecoilState } from 'recoil'
import {
  quantityAtom,
  quantityRangeAtom,
  unitCostAtom,
  internalNeckAtom,
  leftSlaveAtom,
  printBackAtom,
  printFrontAtom,
  rightSlaveAtom,
} from 'recoil/atoms'
import { CollapsableMenu } from '../CollapsableMenu'

export const QuantityMenu = ({ selectedStep }) => {
  const [, setUnitCost] = useRecoilState(unitCostAtom)
  const [quantity, setQuentity] = useRecoilState(quantityAtom)
  const [, setQuentityRange] = useRecoilState(quantityRangeAtom)
  const [, setrightSlave] = useRecoilState(rightSlaveAtom)
  const [, setleftSlave] = useRecoilState(leftSlaveAtom)
  const [, setinternalNeck] = useRecoilState(internalNeckAtom)
  const [, setPrintFront] = useRecoilState(printFrontAtom)
  const [, setPrintBack] = useRecoilState(printBackAtom)

  const handleSetQuantity = (e) => {
    let { value } = e.target
    value = parseInt(value)
    setQuentity(value)

    if (value < 10) {
      setrightSlave(0)
      setleftSlave(0)
      setinternalNeck(0)
      setPrintFront(0)
      setPrintBack(0)
    }

    if (value === 1) {
      setUnitCost(19.9)
      setQuentityRange(null)
    }
    if (value === 2) {
      setUnitCost(16.9)
      setQuentityRange(null)
    }
    if (value === 3) {
      setUnitCost(16.5)
      setQuentityRange(null)
    }
    if (value === 4) {
      setUnitCost(16)
      setQuentityRange(null)
    }
    if (value === 5) {
      setUnitCost(15.5)
      setQuentityRange(null)
    }
    if (value === 6) {
      setUnitCost(15.3)
      setQuentityRange(null)
    }
    if (value === 7) {
      setUnitCost(15)
      setQuentityRange(null)
    }
    if (value === 8) {
      setUnitCost(14.8)
      setQuentityRange(null)
    }
    if (value === 9) {
      setUnitCost(14.5)
      setQuentityRange(null)
    }

    if (value >= 10 && value <= 19) {
      setUnitCost(9)
      setQuentityRange('10-19')
    }

    if (value >= 20 && value <= 49) {
      setUnitCost(8.5)
      setQuentityRange('20-49')
    }

    if (value >= 50 && value <= 99) {
      setUnitCost(6)
      setQuentityRange('50-99')
    }

    if (value >= 100 && value <= 199) {
      setUnitCost(4.5)
      setQuentityRange('100-199')
    }

    if (value >= 200 && value <= 299) {
      setUnitCost(4.3)
      setQuentityRange('200-299')
    }

    if (value >= 300 && value <= 499) {
      setUnitCost(4.2)
      setQuentityRange('300-499')
    }

    if (value >= 500 && value <= 699) {
      setUnitCost(4)
      setQuentityRange('500-699')
    }

    if (value >= 700 && value <= 899) {
      setUnitCost(3.9)
      setQuentityRange('700-899')
    }

    if (value >= 900 && value <= 999) {
      setUnitCost(3.8)
      setQuentityRange('900-999')
    }

    if (value >= 1000) {
      setUnitCost(3.7)
      setQuentityRange('1000')
    }
  }

  return (
    <CollapsableMenu title="Quantit?? ">
      {selectedStep === 2 ? (
        <div className="flex justify-between">
          <b className="text-blue text-sm">Total </b> <span> 40 pcs</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="italic text-sm">
            Seleziona il numero totale di t-shirt che ti servono{' '}
          </p>
          <div className="flex justify-between">
            <b className="text-blue text-sm">Totale magliette</b>{' '}
            <input
              type="number"
              min={0}
              className="bg-white p-1 text-center font-semibold w-28"
              backgroudColor="white"
              value={quantity}
              onChange={handleSetQuantity}
            />
          </div>
        </div>
      )}
    </CollapsableMenu>
  )
}
