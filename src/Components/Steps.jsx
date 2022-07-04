import React from 'react'

export const Steps = ({ selectedStep }) => {
  return (
    <div className="flex w-fit mx-auto items-center py-4">
      <div className="bg-blue text-white font-bold md:w-36 w-24 text-xs md:text-base text-center px-5 py-2 rounded-2xl">
        ESTIMATE
      </div>
      <div className="md:w-24 w-5 h-[3px] mx-2 bg-[#c3c3c3]" />
      <div
        className={`${
          selectedStep !== 1 ? 'bg-blue' : 'bg-[#c3c3c3]'
        }  text-white md:w-36 w-24 text-xs md:text-base text-center font-bold px-5 py-2 rounded-2xl`}>
        SUMMARY
      </div>
      <div className="md:w-24 w-5 h-[3px] mx-2 bg-[#c3c3c3]" />
      <div
        className={`${
          selectedStep === 3 ? 'bg-blue' : 'bg-[#c3c3c3]'
        }  text-white md:w-36 w-24 text-xs md:text-base text-center font-bold px-5 py-2 rounded-2xl`}>
        ENQUIRY
      </div>
    </div>
  )
}
