/* eslint-disable radix */
/* eslint-disable no-fallthrough */
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { unitCostAtom } from 'recoil/atoms'
import { CollapsableMenu } from '../CollapsableMenu'

export const QuantityMenu = ({ selectedStep }) => {
  const [, setUnitCost] = useRecoilState(unitCostAtom)
  const [quantity, setQuentity] = useState(6)

  const handleSetQuantity = (e) => {
    let { value } = e.target
    value = parseInt(value)
    setQuentity(value)

    if (value >= 10 && value <= 19) setUnitCost(9)

    if (value >= 20 && value <= 49) setUnitCost(8.5)

    if (value >= 50 && value <= 99) setUnitCost(6)

    if (value >= 100 && value <= 199) setUnitCost(4.5)

    if (value >= 200 && value <= 299) setUnitCost(4.3)

    if (value >= 300 && value <= 499) setUnitCost(4.2)

    if (value >= 500 && value <= 699) setUnitCost(4)

    if (value >= 700 && value <= 899) setUnitCost(3.9)

    if (value >= 900 && value <= 999) setUnitCost(3.8)

    if (value >= 1000) setUnitCost(3.7)
  }

  return (
    <CollapsableMenu title="QUANTITY / SIZES">
      {selectedStep === 2 ? (
        <div className="flex justify-between">
          <b className="text-blue text-sm">Total Quantity</b>{' '}
          <span> 40 pcs</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="italic text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </p>
          <div className="flex justify-between">
            <b className="text-blue text-sm">Total Quantity</b>{' '}
            <input
              type="number"
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
