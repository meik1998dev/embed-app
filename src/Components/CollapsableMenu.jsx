import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'

export const CollapsableMenu = ({ title, children }) => {
  return (
    <Accordion bg="#EFEFEF" rounded="lg" defaultIndex={[0]} allowMultiple>
      <AccordionItem style={{ border: '2px solid #c3c3c3' }} rounded="lg">
        <h2 className="">
          <AccordionButton h="60px" px={4}>
            <Box flex="1" textAlign="left">
              <h3 className="text-blue font-bold">{title}</h3>
            </Box>
            <span className="font-bold text-blue text-xl">+</span>
          </AccordionButton>
        </h2>
        <AccordionPanel py={0} px={4}>
          <div className="border-t-[1px] pb-4 pt-4 border-black">
            {children}
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
