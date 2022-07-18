import React, { useEffect, useState } from 'react'
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
import back from '../../Assets/back.png'

export const PrintsMenu = ({ selectedStep }) => {
  const [rightSlave, setrightSlave] = useRecoilState(rightSlaveAtom)
  const [leftSlave, setleftSlave] = useRecoilState(leftSlaveAtom)
  const [internalNeck, setinternalNeck] = useRecoilState(internalNeckAtom)
  const [printFront, setPrintFront] = useRecoilState(printFrontAtom)
  const [printBack, setPrintBack] = useRecoilState(printBackAtom)
  const [quantityRange] = useRecoilState(quantityRangeAtom)
  return (
    <CollapsableMenu title="Stampa">
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
            <b className="text-blue text-sm">FRONTE</b>{' '}
            <p className="italic text-sm">
              Indicaci come vorresti la stampa su questo lato, la misura massima
              di stampa è 40 cm x 60 cm.{' '}
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
                    <Radio w="full" size="sm" value={(0).toString()}>
                      <div className="justify-between flex">
                        <span> Nessuna stampa</span> <span>+ € 0.00</span>
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
                              {i + 1 < 6
                                ? `Screen Printing -  ${i + 1} colore`
                                : 'DTG - full color (dimensione massima 38 cm x 42 cm)'}{' '}
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
              Indicaci come vorresti la stampa su questo lato, la misura massima
              di stampa è 40 cm x 60 cm.{' '}
            </p>
            <div className="flex gap-6 py-4 items-center">
              <img src={back} alt="front" />
              <RadioGroup
                w="full"
                colorScheme="green"
                onChange={setPrintBack}
                value={printBack}>
                <Stack direction="column">
                  <div className="border-b-[1px]  border-[#c3c3c3]">
                    <Radio w="full" size="sm" value={(0).toString()}>
                      <div className="justify-between flex">
                        <span> Nessuna stampa</span> <span>+ € 0.00</span>
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
                              {i + 1 < 6
                                ? `Screen Printing -  ${i + 1} colore`
                                : 'DTG - full color (dimensione massima 38 cm x 42 cm)'}{' '}
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
            <b className="text-blue text-sm">MANICA DESTRA</b>{' '}
            <p className="italic text-sm">
              Indica la stampa che vorresti su questo lato, la dimensione
              massima è 10 cm x 10 cm
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
                    <Radio w="full" size="sm" value={(0).toString()}>
                      <div className="justify-between flex">
                        <span> Nessuna stampa</span> <span>+ € 0.00</span>
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
                              {i + 1 < 6
                                ? `Screen Printing -  ${i + 1} colore`
                                : 'DTG - full color'}{' '}
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
            <b className="text-blue text-sm">MANICA SINISTRA</b>{' '}
            <p className="italic text-sm">
              Indica la stampa che vorresti su questo lato, la dimensione
              massima è 10 cm x 10 cm
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
                    <Radio w="full" size="sm" value={(0).toString()}>
                      <div className="justify-between flex">
                        <span> Nessuna stampa</span> <span>+ € 0.00</span>
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
                              {i + 1 < 6
                                ? `Screen Printing -  ${i + 1} colore`
                                : 'DTG - full color'}{' '}
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
            <b className="text-blue text-sm">ETICHETTA INTERNA</b>{' '}
            <p className="italic text-sm">
              Puoi personalizzare la tua etichetta fino ad una dimensione di 7
              cm x 3 cm.
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
                    <Radio w="full" size="sm" value={(0).toString()}>
                      <div className="justify-between flex">
                        <span> Nessuna stampa</span> <span>+ € 0.00</span>
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
                              {i + 1 < 6
                                ? `Screen Printing -  ${i + 1} colore`
                                : 'DTG - full color'}{' '}
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
