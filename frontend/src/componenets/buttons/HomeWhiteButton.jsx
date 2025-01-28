import React, { useState } from 'react';

const HomeWhiteButton = ({ eventHandler, inputType, initialValue, name, value }) => {
  const [inputValue, setInputValue] = useState(value || '');
  {console.log(value)}

  return (
    <div className='w-full md:w-[70%] h-[60%] border rounded-md border-spacing-2 my-2 flex'>
      <input
        type={inputType}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClick={(e) => eventHandler(e)}
        className="w-full px-3"
        
      />
      
      </div>
  );
};

export default HomeWhiteButton;
