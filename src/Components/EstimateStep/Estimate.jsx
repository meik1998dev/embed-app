import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { DeliveryMenu } from '../Menus/DeliveryMenu'
import { PackagingMenu } from '../Menus/PackagingMenu'
import { PrintsMenu } from '../Menus/PrintsMenu'
import tshirts from '../../Assets/tshirts.png'
import { QuantityMenu } from '../Menus/QuantityMenu'
import { Steps } from '../Steps'
import { EnquireForm } from '../EnquireForm'

export const Estimate = () => {
  const [selectedStep, setselectedStep] = useState(1)
  return (
    <div>
      <Steps selectedStep={selectedStep} />
      <div className="flex lg:w-9/12 w-full mx-auto px-2  md:flex-nowrap flex-wrap py-4 gap-5">
        <div className="md:w-2/3 w-full flex flex-col gap-5">
          <h1 className="text-blue font-bold text-2xl">
            {selectedStep === 1 && 'GET YOUR ESTIMATE'}
            {selectedStep === 2 && 'SUMMERY'}
            {selectedStep === 3 && 'ENQUIRE'}
          </h1>
          {selectedStep !== 3 ? (
            <>
              <div className="flex w-full mx-auto gap-2 my-4">
                <img className="px-11" src={tshirts} alt="" />
                <div className="flex flex-col w-full px-2 ">
                  <h2 className="my-2 text-blue font-bold text-lg">
                    UNISEX T-Shirt
                  </h2>
                  <div className="border-b-[1px] text-orange py-2 flex gap-8 border-slate-400">
                    <span>tshirts</span>
                    <span>
                      <b>100</b>
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
              <QuantityMenu selectedStep={selectedStep} />
              <PrintsMenu selectedStep={selectedStep} />
              <PackagingMenu selectedStep={selectedStep} />
              <DeliveryMenu selectedStep={selectedStep} />
            </>
          ) : (
            <EnquireForm />
          )}

          {selectedStep === 1 && (
            <Button
              h="44px"
              bgColor="#57CC2D"
              w="400px"
              marginX="auto"
              my="15px"
              onClick={() => setselectedStep(2)}
              rounded="19px"
              textColor="white">
              DONE
            </Button>
          )}
        </div>
        <div className=" md:w-1/3 w-full flex-col flex">
          <div className="bg-gray p-7 rounded-2xl">
            <h3 className="text-blue font-bold">ESTIMATE</h3>
            <div className="flex flex-col border-b-[1px] gap-2 py-6 border-black">
              <div className="flex justify-between">
                <span>Delivery date</span>
                <span>
                  <b>30 Aug 2022</b>
                </span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  <b>Free</b>
                </span>
              </div>
            </div>
            <div className="flex flex-col border-b-[1px] gap-2 py-6 border-black">
              <div className="flex justify-between">
                <span>Unit Cost</span>
                <span>
                  <b>€ 3.00</b>
                </span>
              </div>
              <div className="flex justify-between">
                <span>Net total</span>
                <span>
                  <b>€ 297.00</b>
                </span>
              </div>
              <div className="flex justify-between">
                <span>VAT XX%</span>
                <span>
                  <b>€ 70.00</b>
                </span>
              </div>
            </div>
            <div className=" py-6 ">
              <div className="flex justify-between text-xl">
                <span>
                  <b>Subtotal</b>
                </span>
                <span>
                  <b>€ 370.00</b>
                </span>
              </div>
            </div>
          </div>
          {selectedStep === 2 && (
            <>
              <Button
                h="44px"
                bgColor="#57CC2D"
                w="400px"
                marginX="auto"
                my="15px"
                onClick={() => setselectedStep(3)}
                rounded="19px"
                textColor="white">
                CONFIRM
              </Button>
              <Button
                h="44px"
                bgColor="transparent"
                w="400px"
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
  )
}
