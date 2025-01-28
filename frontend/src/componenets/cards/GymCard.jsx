import React from 'react'

const GymCard = ({heading, imageUrl, description, onChange}) => {
    function eventHandler(){
        console.log("hello")
      }
    const BlueButtonProps = {
        eventHandler: {onChange},
        description: "Make an offer"
      };
  return (
    <div className='w-full h-full'>
        <div className='flex flex-col'>
        <h1 className='text-[#005EFF] font-plus-jakarta'>{heading}</h1>
        <div className='flex flex-row justify-between'>
            <div className='flex-1  mr-8 my-2'>
            <div className='w-full h-full'>
            <img src={imageUrl}></img>
            </div>
            </div>
            <div className='flex-1 justify-center items-center'>
            <div onClick={eventHandler} className='w-[50%] rounded-md py-4 mt-16 my-2 bg-[#005EFF] font-plus-jakarta font-bold flex justify-center items-center text-center text-white'>Make an offer</div>
            </div>
        </div>
        <div>{description}</div>
    </div>
    </div>
  )
}


export default GymCard