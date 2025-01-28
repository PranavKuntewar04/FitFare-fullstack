import React from 'react'
import signUp from '../assets/pre-register/signup.png'
import DynamicSVG from './utils/DynamicSVG'

const LeftBar = ({firstHeading, secondHeading, description, imageUrl}) => {
  return (
    <div className='rounded-tl-lg rounded-bl-lg w-[100%] lg:w-[40%] h-[100%] bg-[#005EFF] overflow-clip'>
    <div className='flex flex-col w-full h-full justify-between'>
    <div className=' pt-16 xs:pt-32 lg:pt-20 xl:pt-32 px-4 sm:px-4 md:px-8 xl:px-12 bg-[#005EFF]'>
        <div className='flex flex-col text-white'>
            <div className='flex flex-col font-plus-jakarta text-4xl xs:text-5xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold'>
                <div className='pb-2 sm:pb-4 lg:pb-2 xl:pb-4'>{firstHeading}</div>
                <div>{secondHeading}</div>
            </div>
            <div className='text-justify text-lg pt-4 sm:pt-6 xl:pt-10 xl:w-[65%]'>
                {description}
            </div>
        </div>     
    </div>
    <div className=''>
            <img src={imageUrl} className=' w-full lg:-mt-2 xl:-mt-4'></img>
        
        </div>
    </div>
</div>
  )
}

export default LeftBar