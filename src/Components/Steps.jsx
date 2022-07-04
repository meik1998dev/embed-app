import React from 'react';

export const Steps = ({ selectedStep }) => {
   return (
      <div className='flex w-fit mx-auto items-center py-4'>
         <div className={`bg-blue text-white font-bold w-36 text-center px-5 py-2 rounded-2xl`}>
            ESTIMATE
         </div>
         <div className='w-24 h-[3px] mx-2 bg-[#c3c3c3]' />
         <div
            className={`${
               selectedStep !== 1 ? 'bg-blue' : 'bg-[#c3c3c3]'
            }  text-white w-36 text-center font-bold px-5 py-2 rounded-2xl`}>
            SUMMARY
         </div>
         <div className='w-24 h-[3px] mx-2 bg-[#c3c3c3]' />
         <div
            className={`${
               selectedStep === 3 ? 'bg-blue' : 'bg-[#c3c3c3]'
            }  text-white w-36 text-center font-bold px-5 py-2 rounded-2xl`}>
            ENQUIRY
         </div>
      </div>
   );
};
