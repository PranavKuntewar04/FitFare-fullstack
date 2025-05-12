import { Loader2 } from 'lucide-react'
import React from 'react'

const WhiteButton = ({props}) => {
  return (
    <button 
      disabled={props.disabled}
      onClick={props.eventHandler} 
      className={`w-full h-[50%] rounded-md border border-spacing-4 py-4 ${props.disabled ? 'bg-gray-300' : 'bg-white'} font-bold flex justify-center items-center text-center text-black hover:cursor-pointer`}>
      {props.disabled? <><Loader2 className="animate-spin" /></> :props.description}
    </button>
  )
}

export default WhiteButton