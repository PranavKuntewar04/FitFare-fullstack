import React from 'react';

const RightBar = ({ props, children }) => {
  return (
    <div className="w-full lg:w-[80%] h-full bg-white px-4 sm:px-4 md:px-20 xl:px-32 py-8 flex flex-col justify-between rounded-tr-lg rounded-br-lg overflow-hidden">
      <div className="flex flex-col w-full h-full items-start font-plus-jakarta">
        <div className="flex items-center justify-center w-full">
          <img src={props.imageUrl} alt="Signup illustration" className="w-full h-auto object-contain max-h-40" />
        </div>
        <div className="text-left text-2xl mt-8 mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0)' }}>
          <div className="font-black">{props.title}</div>
          <div className="text-base font-normal mt-2">{props.description}</div>
        </div>
        <div className="w-full flex-grow overflow-auto hide-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
