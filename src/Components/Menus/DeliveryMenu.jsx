/* eslint-disable no-nested-ternary */
import React from 'react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { DeleverypricesTable } from 'pricesTable'
import { useRecoilState } from 'recoil'
import { deleveryAtom, quantityRangeAtom } from 'recoil/atoms'
import { CollapsableMenu } from '../CollapsableMenu'

export const DeliveryMenu = ({ selectedStep }) => {
  const [value, setValue] = useRecoilState(deleveryAtom)
  const [quantityRange] = useRecoilState(quantityRangeAtom)

  return (
    <CollapsableMenu title="CONSEGNA">
      {selectedStep === 2 ? (
        <div className="flex justify-between">
          <b className="text-blue text-sm">Delivery time</b>{' '}
          <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2 ">
          <p className="italic text-sm">
            Entro quanto vorresti ricevere il tuo ordine? Le date indicate sono
            da confermare in fase di acquisto
          </p>
          <div className="flex gap-6 py-4">
            <b className="text-blue text-sm w-1/5">CONSEGNA</b>{' '}
            <RadioGroup
              w="full"
              colorScheme="green"
              onChange={setValue}
              value={value}>
              <Stack direction="column">
                {DeleverypricesTable[quantityRange].map((item, i) => {
                  return (
                    <div className="border-b-[1px]  border-[#c3c3c3]">
                      <Radio w="full" size="sm" value={`${String(item)}-${i}`}>
                        <div className="justify-between flex">
                          <span>
                            {i === 0 && 7}
                            {i === 1 && 10}
                            {i === 2 && 14}
                            {i === 3 && 20} Giorni lavorativi
                          </span>
                          <span>+ € {item}</span>
                        </div>
                      </Radio>
                    </div>
                  )
                })}
              </Stack>
            </RadioGroup>
          </div>
        </div>
      )}
    </CollapsableMenu>
  )
}
