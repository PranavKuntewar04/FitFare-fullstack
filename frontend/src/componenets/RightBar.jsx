import React from 'react'

const RightBar = ({props, children}) => {
  return (
    <div className='rounded-tr-lg rounded-br-lg w-[100%] lg:w-[60%] bg-white px-4 sm:px-4 md:px-20 xl:px-32 py-16'>
      <div className='flex flex-col w-full h-full items-start font-plus-jakarta '>
      <div className='flex items-center justify-center pt-4 w-full '>
  <img src={props.imageUrl} alt="image" />
</div>
        <div className=' text-left text-2xl mt-16 mb-12' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0)'}} >
        <div className='font-black'>{props.title}</div>
        </div>
        <div className='w-full h-full'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RightBar
