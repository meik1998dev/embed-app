/* eslint-disable radix */
import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import {
  deleveryAtom,
  internalNeckAtom,
  leftSlaveAtom,
  packagingAtom,
  printBackAtom,
  printFrontAtom,
  quantityAtom,
  rightSlaveAtom,
  unitCostAtom,
} from 'recoil/atoms'
import { DeliveryMenu } from '../Menus/DeliveryMenu'
import { PackagingMenu } from '../Menus/PackagingMenu'
import { PrintsMenu } from '../Menus/PrintsMenu'
import tshirts from '../../Assets/tshirts.png'
import { QuantityMenu } from '../Menus/QuantityMenu'
import { Steps } from '../Steps'
import { EnquireForm } from '../EnquireForm'

export const Estimate = () => {
  const [unutCost] = useRecoilState(unitCostAtom)
  const [rightSlave] = useRecoilState(rightSlaveAtom)
  const [leftSlave] = useRecoilState(leftSlaveAtom)
  const [internalNeck] = useRecoilState(internalNeckAtom)
  const [printFront] = useRecoilState(printFrontAtom)
  const [printBack] = useRecoilState(printBackAtom)
  const [packaging] = useRecoilState(packagingAtom)
  const [delevery] = useRecoilState(deleveryAtom)

  const [quantity] = useRecoilState(quantityAtom)

  const format = (item) => {
    if (item === 0) return 0

    return Number(item.split('-')[0])
  }

  const getDeleverytext = (item) => {
    if (item === 0) return '20 giorni lavorativi'

    const index = Number(item.split('-')[1])
    if (index === 0) return '7 giorni lavorativi'
    if (index === 1) return '10 giorni lavorativi'
    if (index === 2) return '14 giorni lavorativi'
    if (index === 3) return '20 giorni lavorativi'
  }

  const [selectedStep, setselectedStep] = useState(1)

  const tshirtCost =
    unutCost +
    format(rightSlave) +
    format(leftSlave) +
    format(internalNeck) +
    format(printBack) +
    Number(packaging) +
    format(printFront)

  const vat = Number(((tshirtCost * quantity * 22) / 100).toFixed(2))

  const total = (vat + tshirtCost * quantity + format(delevery)).toFixed(2)
  return (
    <div>
      <Steps selectedStep={selectedStep} />
      <div className="flex lg:w-9/12 w-full mx-auto px-2  md:flex-nowrap flex-wrap py-4 gap-5">
        <div className="md:w-2/3 w-full flex flex-col gap-5">
          <h1 className="text-blue font-bold text-2xl">
            {selectedStep === 1 && 'Chiedi un preventivo gratuito'}
            {selectedStep === 2 && 'SUMMERY'}
            {selectedStep === 3 && 'ENQUIRE'}
          </h1>
          {selectedStep !== 3 ? (
            <>
              <div className="flex w-full sm:flex-nowrap items-center justify-center flex-wrap mx-auto gap-2 my-4">
                <img className="px-11 " src={tshirts} alt="" />
                <div className="flex flex-col w-full px-2 ">
                  <h2 className="my-2 text-blue font-bold text-lg">
                    T-SHIRT TEETOGO
                  </h2>
                  <ul className="text-xs">
                    <li>- 100% cotone organico 145 gr.</li>
                    <li>- Manica corta/girocollo</li>
                    <li>- Modello unisex</li>
                    <li>- Vestibilità regolare</li>
                  </ul>
                  <div className="border-b-[1px] text-orange py-2 flex gap-8 border-slate-400">
                    <span>tshirts</span>
                    <span>
                      <b>{quantity}</b>
                    </span>
                  </div>
                  <div className="border-b-[1px] text-orange py-2 flex gap-8 border-slate-400">
                    <span>Available sizes</span>
                    <span>
                      <b className="text-">XS, S, M, L, XL, XXL</b>
                    </span>
                  </div>
                </div>
              </div>
              <h2>
                Le taglie e i colori delle t-shirt saranno selezionati in fase
                di acquisto
              </h2>
              <QuantityMenu selectedStep={selectedStep} />
              {quantity >= 10 && <PrintsMenu selectedStep={selectedStep} />}
              {quantity >= 10 && <DeliveryMenu selectedStep={selectedStep} />}
              {quantity > 0 && <PackagingMenu selectedStep={selectedStep} />}
            </>
          ) : (
            <EnquireForm />
          )}

          {selectedStep === 1 && (
            <Button
              h="44px"
              bgColor="#57CC2D"
              marginX="auto"
              className="sm:w-[400px] w-full "
              disabled={quantity <= 0}
              my="15px"
              onClick={() => setselectedStep(3)}
              rounded="19px"
              textColor="white">
              DONE
            </Button>
          )}
        </div>
        <div className=" md:w-1/3 md:relative w-full flex-col flex">
          <div className="bg-gray p-7 md:fixed md:w-[30%] w-full rounded-2xl">
            <h3 className="text-blue font-bold">PREZZO</h3>
            <div className="flex flex-col border-b-[1px] gap-2 py-6 border-black">
              <div className="flex justify-between">
                <span>Tempistiche di consegna</span>
                <span>
                  <b>{getDeleverytext(delevery)}</b>
                </span>
              </div>
              <div className="flex justify-between">
                <span>Spedizione</span>
                <span>
                  <b>
                    {format(delevery) === 0
                      ? 'Gratuita'
                      : `€ ${format(delevery)}`}
                  </b>
                </span>
              </div>
            </div>
            <div className="flex flex-col border-b-[1px] gap-2 py-6 border-black">
              <div className="flex justify-between">
                <span>Costo unitario</span>
                <span>
                  <b>€ {tshirtCost.toFixed(2)}</b>
                </span>
              </div>
              <div className="flex justify-between">
                <span>Totale netto</span>
                <span>
                  <b>€ {(tshirtCost * quantity).toFixed(2)}</b>
                </span>
              </div>
              <div className="flex justify-between">
                <span>IVA 22%</span>
                <span>
                  <b>€ {vat.toFixed(2)}</b>
                </span>
              </div>
            </div>
            <div className=" py-6 ">
              <div className="flex justify-between text-xl">
                <span>
                  <b>Totale iva incl.</b>
                </span>
                <span>
                  <b>€ {total}</b>
                </span>
              </div>
            </div>
            {selectedStep === 3 && (
              <>
                <Button
                  h="44px"
                  bgColor="transparent"
                  w="full"
                  marginX="auto"
                  onClick={() => setselectedStep(1)}
                  rounded="19px"
                  textColor="black">
                  MODIFY
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
