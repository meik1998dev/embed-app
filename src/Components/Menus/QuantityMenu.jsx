import React from 'react'
import { CollapsableMenu } from '../CollapsableMenu'

export const QuantityMenu = ({ selectedStep }) => {
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
            <div className="bg-white py-1 px-8 border-2 border-slate-600">
              40
            </div>
          </div>
        </div>
      )}
    </CollapsableMenu>
  )
}
