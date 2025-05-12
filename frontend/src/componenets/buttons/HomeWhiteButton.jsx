import React, { useState } from 'react';

const HomeWhiteButton = ({ eventHandler, inputType, initialValue, name, value }) => {
  const [inputValue, setInputValue] = useState(value || '');

  return (
    <div className='w-full h-[60%] border rounded-md border-spacing-2 my-2 flex'>
      <input
        name={name}
        type={inputType}
        value={inputValue}
        onChange={(e) => {
          eventHandler(e)
          setInputValue(e.target.value)
        }}
        className="w-full px-3"
      />
    </div>
  );
};

export default HomeWhiteButton;
