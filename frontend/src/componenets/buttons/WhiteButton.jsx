import React from 'react'

const WhiteButton = ({props}) => {
  return (
    <div onClick={props.eventHandler} className={'w-full h-[50%] rounded-md border border-spacing-4 py-4 bg-white font-bold flex justify-center items-center text-center text-black hover:cursor-pointer'}>{props.description}</div>
  )
}

export default WhiteButton