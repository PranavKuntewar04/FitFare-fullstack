import { Loader2 } from 'lucide-react'
import React from 'react'

const BlueButton = ({props}) => {
  return (
    <div 
      disabled={props.disabled}
      onClick={props.eventHandler} 
      className={`w-full h-[50%] rounded-md py-4 mt-4 my-2 bg-[#005EFF] font-bold flex justify-center items-center text-center text-white hover:cursor-pointer ${props.disabled ? "bg-[#75a0ea]" : "bg-[#005EFF]" }`}>
        {props.disabled ? <Loader2 className='animate-spin' /> : props.description}
    </div>
  )
}

export default BlueButton