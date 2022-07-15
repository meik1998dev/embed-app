import React from 'react'
import { Input, Button } from '@chakra-ui/react'

export const EnquireForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input
        h="44px"
        rounded="15px"
        border="2px"
        borderColor="#c3c3c3"
        placeholder="Name"
      />
      <Input
        h="44px"
        rounded="15px"
        border="2px"
        borderColor="#c3c3c3"
        placeholder="Cagnorne"
      />
      <Input
        h="44px"
        rounded="15px"
        border="2px"
        borderColor="#c3c3c3"
        placeholder="Company"
      />
      <Input
        h="44px"
        rounded="15px"
        border="2px"
        borderColor="#c3c3c3"
        placeholder="Email"
      />
      <Input
        h="44px"
        rounded="15px"
        border="2px"
        borderColor="#c3c3c3"
        placeholder="Contact"
      />
      <Input
        h="44px"
        rounded="15px"
        border="2px"
        borderColor="#c3c3c3"
        placeholder="City"
      />
      <Input
        h="44px"
        rounded="15px"
        border="2px"
        borderColor="#c3c3c3"
        placeholder="Country"
      />
      <Button
        h="44px"
        bgColor="#57CC2D"
        className="sm:w-[400px] w-full "
        alignSelf="end"
        my="15px"
        rounded="19px"
        textColor="white">
        SEND ENQUIRY
      </Button>
    </div>
  )
}
