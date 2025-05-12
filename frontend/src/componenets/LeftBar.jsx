import React from 'react';

const LeftBar = ({ firstHeading, secondHeading, description, imageUrl }) => {
  return (
    <div className="w-full lg:w-[40%] bg-[#005EFF] overflow-hidden flex flex-col rounded-tl-lg rounded-bl-lg">
      <div className="p-8 text-white font-plus-jakarta flex-none">
        <div className="text-4xl xs:text-5xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
          <div className="pb-2 sm:pb-4 lg:pb-2 xl:pb-4">{firstHeading}</div>
          <div>{secondHeading}</div>
        </div>
        <div className="text-lg pt-4 sm:pt-6 xl:pt-10 xl:w-[65%] text-justify">
          {description}
        </div>
      </div>
      
      <div className='bottom-8 relative'>
        <img
          src={imageUrl}
          alt="Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LeftBar;
