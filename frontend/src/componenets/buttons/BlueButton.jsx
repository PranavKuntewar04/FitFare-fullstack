import React from 'react'

const BlueButton = ({props}) => {
  return (
    <div onClick={props.eventHandler} className={'w-full h-[50%] rounded-md py-4 mt-16 my-2 bg-[#005EFF] font-bold flex justify-center items-center text-center text-white hover:cursor-pointer'}>{props.description}</div>
  )
}

export default BlueButton