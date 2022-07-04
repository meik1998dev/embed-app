import React, { useState } from 'react';
import { CollapsableMenu } from '../CollapsableMenu';
import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import front from '../../Assets/front.png';
import right from '../../Assets/right.png';
import neck from '../../Assets/neck.png';
import left from '../../Assets/left.png';

export const PrintsMenu = ({ selectedStep }) => {
   const [value, setValue] = useState('1');
   return (
      <CollapsableMenu title={'PRINTS'}>
         {selectedStep === 2 ? (
            <div className='flex flex-col'>
               <div className='flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2'>
                  <b className='text-blue text-sm'>FRONT</b>{' '}
                  <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
               </div>
               <div className='flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2'>
                  <b className='text-blue text-sm'>BACK</b>{' '}
                  <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
               </div>
               <div className='flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2'>
                  <b className='text-blue text-sm'>RIGHT SLEEVE</b>{' '}
                  <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
               </div>
               <div className='flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2'>
                  <b className='text-blue text-sm'>LEFT SLEEVE</b>{' '}
                  <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
               </div>
               <div className='flex justify-between border-b-[1px]  border-[#c3c3c3] pt-2'>
                  <b className='text-blue text-sm'>INTERNAL NECK</b>{' '}
                  <span> Lorem ipsum dolor sit amet, consetetur sadipscin</span>
               </div>
            </div>
         ) : (
            <div className='flex flex-col gap-2'>
               <div className='flex flex-col gap-2 border-b-[1px] border-black'>
                  <b className='text-blue text-sm'>Front</b>{' '}
                  <p className='italic text-sm'>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam
                  </p>
                  <div className='flex gap-6 py-4'>
                     <img src={front} alt='front' />
                     <RadioGroup
                        w={'full'}
                        colorScheme='green'
                        onChange={setValue}
                        value={value}>
                        <Stack direction='column'>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='1'>
                                 <div className='justify-between flex'>
                                    <span> none</span> <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                        </Stack>
                     </RadioGroup>
                  </div>
               </div>
               <div className='flex flex-col gap-2 border-b-[1px] border-black'>
                  <b className='text-blue text-sm'>RIGHT SLEEVE</b>{' '}
                  <p className='italic text-sm'>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam
                  </p>
                  <div className='flex gap-6 py-4'>
                     <img src={right} alt='front' />
                     <RadioGroup
                        w={'full'}
                        colorScheme='green'
                        onChange={setValue}
                        value={value}>
                        <Stack direction='column'>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='1'>
                                 <div className='justify-between flex'>
                                    <span> none</span> <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                        </Stack>
                     </RadioGroup>
                  </div>
               </div>
               <div className='flex flex-col gap-2 border-b-[1px] border-black'>
                  <b className='text-blue text-sm'>LEFT SLEEVE</b>{' '}
                  <p className='italic text-sm'>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam
                  </p>
                  <div className='flex gap-6 py-4'>
                     <img src={left} alt='front' />
                     <RadioGroup
                        w={'full'}
                        colorScheme='green'
                        onChange={setValue}
                        value={value}>
                        <Stack direction='column'>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='1'>
                                 <div className='justify-between flex'>
                                    <span> none</span> <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                        </Stack>
                     </RadioGroup>
                  </div>
               </div>
               <div className='flex flex-col gap-2 border-b-[1px] border-black'>
                  <b className='text-blue text-sm'>INTERNAL NECK</b>{' '}
                  <p className='italic text-sm'>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                     sed diam
                  </p>
                  <div className='flex gap-6 py-4'>
                     <img src={neck} alt='front' />
                     <RadioGroup
                        w={'full'}
                        colorScheme='green'
                        onChange={setValue}
                        value={value}>
                        <Stack direction='column'>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='1'>
                                 <div className='justify-between flex'>
                                    <span> none</span> <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='2'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                           <div className='border-b-[1px]  border-[#c3c3c3]'>
                              <Radio w={'full'} size={'sm'} value='3'>
                                 <div className='justify-between flex'>
                                    <span> Screen Printing - 1 color</span>{' '}
                                    <span>+ € 0.00</span>
                                 </div>
                              </Radio>
                           </div>
                        </Stack>
                     </RadioGroup>
                  </div>
               </div>
            </div>
         )}
      </CollapsableMenu>
   );
};
