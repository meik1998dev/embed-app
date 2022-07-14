import React, { useState } from 'react'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import {
  FrontandBackpricesTable,
  neckpricesTable,
  sleevepricesTable,
} from 'pricesTable'
import {
  internalNeckAtom,
  leftSlaveAtom,
  printBackAtom,
  printFrontAtom,
  quantityRangeAtom,
  rightSlaveAtom,
} from 'recoil/atoms'
import { useRecoilState } from 'recoil'
import { CollapsableMenu } from '../CollapsableMenu'
import front from '../../Assets/front.png'
import right from '../../Assets/right.png'
import neck from '../../Assets/neck.png'
import left from '../../Assets/left.png'

export const PrintsMenu = ({ selectedStep }) => {
  const [rightSlave, setrightSlave] = useRecoilState(rightSlaveAtom)
  const [leftSlave, setleftSlave] = useRecoilState(leftSlaveAtom)
  const [internalNeck, setinternalNeck] = useRecoilState(internalNeckAtom)
  const [printFront, setPrintFront] = useRecoilState(printFrontAtom)
  const [printBack, setPrintBack] = useRecoilState(printBackAtom)
  const [quantityRange] = useRecoilState(quantityRangeAtom)

  return (
    <CollapsableMenu title="PRINTS">
      {selectedStep === 2 ? (
        <div className="flex flex-col">
          <div className="flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2">
            <b className="text-blue text-sm">FRONT</b>{' '}
            <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
          </div>
          <div className="flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2">
            <b className="text-blue text-sm">BACK</b>{' '}
            <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
          </div>
          <div className="flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2">
            <b className="text-blue text-sm">RIGHT SLEEVE</b>{' '}
            <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
          </div>
          <div className="flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2">
            <b className="text-blue text-sm">LEFT SLEEVE</b>{' '}
            <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
          </div>
          <div className="flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2">
            <b className="text-blue text-sm">INTERNAL NECK</b>{' '}
            <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2 border-b-[1px] border-black">
            <b className="text-blue text-sm">Front</b>{' '}
            <p className="italic text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <div className="flex gap-6 py-4 items-center">
              <img src={front} alt="front" />
              <RadioGroup
                w="full"
                colorScheme="green"
                onChange={setPrintFront}
                value={printFront}>
                <Stack direction="column">
                  <div className="border-b-[1px]  border-[#c3c3c3]">
                    <Radio w="full" size="sm" value={0}>
                      <div className="justify-between flex">
                        <span> none</span> <span>+ € 0.00</span>
                      </div>
                    </Radio>
                  </div>
                  {FrontandBackpricesTable[quantityRange].map((item, i) => {
                    return (
                      <div className="border-b-[1px]  border-[#c3c3c3]">
                        <Radio
                          w="full"
                          size="sm"
                          value={`${String(item)}-${i}`}>
                          <div className="justify-between flex">
                            <span>
                              Screen Printing - {i + 1 < 6 ? i + 1 : 'full'}{' '}
                              color
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
          <div className="flex flex-col gap-2 border-b-[1px] border-black">
            <b className="text-blue text-sm">Back</b>{' '}
            <p className="italic text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <div className="flex gap-6 py-4 items-center">
              <img src={front} alt="front" />
              <RadioGroup
                w="full"
                colorScheme="green"
                onChange={setPrintBack}
                value={printBack}>
                <Stack direction="column">
                  <div className="border-b-[1px]  border-[#c3c3c3]">
                    <Radio w="full" size="sm" value={0}>
                      <div className="justify-between flex">
                        <span> none</span> <span>+ € 0.00</span>
                      </div>
                    </Radio>
                  </div>
                  {FrontandBackpricesTable[quantityRange].map((item, i) => {
                    return (
                      <div className="border-b-[1px]  border-[#c3c3c3]">
                        <Radio
                          w="full"
                          size="sm"
                          value={`${String(item)}-${i}`}>
                          <div className="justify-between flex">
                            <span>
                              Screen Printing - {i + 1 < 6 ? i + 1 : 'full'}{' '}
                              color
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
          <div className="flex flex-col gap-2 border-b-[1px] border-black">
            <b className="text-blue text-sm">RIGHT SLEEVE</b>{' '}
            <p className="italic text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <div className="flex gap-6 py-4 items-center">
              <img src={right} alt="front" />
              <RadioGroup
                w="full"
                colorScheme="green"
                onChange={setrightSlave}
                value={rightSlave}>
                <Stack direction="column">
                  <div className="border-b-[1px]  border-[#c3c3c3]">
                    <Radio w="full" size="sm" value={0}>
                      <div className="justify-between flex">
                        <span> none</span> <span>+ € 0.00</span>
                      </div>
                    </Radio>
                  </div>
                  {sleevepricesTable[quantityRange].map((item, i) => {
                    return (
                      <div className="border-b-[1px]  border-[#c3c3c3]">
                        <Radio
                          w="full"
                          size="sm"
                          value={`${String(item)}-${i}`}>
                          <div className="justify-between flex">
                            <span>
                              Screen Printing - {i + 1 < 6 ? i + 1 : 'full'}{' '}
                              color
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
          <div className="flex flex-col gap-2 border-b-[1px] border-black">
            <b className="text-blue text-sm">LEFT SLEEVE</b>{' '}
            <p className="italic text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <div className="flex gap-6 py-4 items-center">
              <img src={left} alt="front" />
              <RadioGroup
                w="full"
                colorScheme="green"
                onChange={setleftSlave}
                value={leftSlave}>
                <Stack direction="column">
                  <div className="border-b-[1px]  border-[#c3c3c3]">
                    <Radio w="full" size="sm" value={0}>
                      <div className="justify-between flex">
                        <span> none</span> <span>+ € 0.00</span>
                      </div>
                    </Radio>
                  </div>
                  {sleevepricesTable[quantityRange].map((item, i) => {
                    return (
                      <div className="border-b-[1px]  border-[#c3c3c3]">
                        <Radio
                          w="full"
                          size="sm"
                          value={`${String(item)}-${i}`}>
                          <div className="justify-between flex">
                            <span>
                              Screen Printing - {i + 1 < 6 ? i + 1 : 'full'}{' '}
                              color
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
          <div className="flex flex-col gap-2 border-b-[1px] border-black">
            <b className="text-blue text-sm">INTERNAL NECK</b>{' '}
            <p className="italic text-sm">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            </p>
            <div className="flex gap-6 py-4 items-center">
              <img src={neck} alt="front" />
              <RadioGroup
                w="full"
                colorScheme="green"
                onChange={setinternalNeck}
                value={internalNeck}>
                <Stack direction="column">
                  <div className="border-b-[1px]  border-[#c3c3c3]">
                    <Radio w="full" size="sm" value={0}>
                      <div className="justify-between flex">
                        <span> none</span> <span>+ € 0.00</span>
                      </div>
                    </Radio>
                  </div>
                  {neckpricesTable[quantityRange].map((item, i) => {
                    return (
                      <div className="border-b-[1px]  border-[#c3c3c3]">
                        <Radio
                          w="full"
                          size="sm"
                          value={`${String(item)}-${i}`}>
                          <div className="justify-between flex">
                            <span>
                              Screen Printing - {i + 1 < 6 ? i + 1 : 'full'}{' '}
                              color
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
        </div>
      )}
    </CollapsableMenu>
  )
}
