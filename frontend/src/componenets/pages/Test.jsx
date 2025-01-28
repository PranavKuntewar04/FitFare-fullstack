import React from 'react'
import DynamicSVG from '../utils/DynamicSVG'

const Test = () => {
  return (
    <div>
      <h1>Welcome to My Page</h1>
     {/* Usage of the DynamicSVG component with the 'blankStar' icon */}
     <DynamicSVG 
        icon="blankStar" 
        width={50} 
        height={50} 
        className="some-class" 
        alt="Blank Star Icon"
      />
    </div>
  )
}

export default Test