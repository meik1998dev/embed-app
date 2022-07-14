import React from 'react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { packagingAtom } from 'recoil/atoms'
import { CollapsableMenu } from '../CollapsableMenu'

export const PackagingMenu = ({ selectedStep }) => {
  const [value, setValue] = useRecoilState(packagingAtom)

  return (
    <CollapsableMenu title="PACKAGING">
      {selectedStep === 2 ? (
        <div className="flex justify-between">
          <b className="text-blue text-sm">Delivery type</b>{' '}
          <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="italic text-sm">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          </p>
          <div className="flex gap-6 py-4">
            <b className="text-blue text-sm w-1/5">Delivery type</b>{' '}
            <RadioGroup
              w="full"
              colorScheme="green"
              onChange={setValue}
              value={value}>
              <Stack direction="column">
                <div className="border-b-[1px]  border-[#c3c3c3]">
                  <Radio w="full" size="sm" value={(0).toString()}>
                    <div className="justify-between flex">
                      <span> Bulk packaging</span> <span>+ € 0.00</span>
                    </div>
                  </Radio>
                </div>
                <div className="border-b-[1px]  border-[#c3c3c3]">
                  <Radio w="full" size="sm" value={(0.35).toString()}>
                    <div className="justify-between flex">
                      <span>Individual product package</span>{' '}
                      <span>+ € 0.35</span>
                    </div>
                  </Radio>
                </div>
              </Stack>
            </RadioGroup>
          </div>
        </div>
      )}
    </CollapsableMenu>
  )
}
