import React, { useState } from 'react';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';
import navRating from '../../assets/pre-register/navRating.png';
import rating from '../../assets/pre-register/rating.png';
import Label from '../Label';
import InputText from '../InputText';
import BlueButton from '../buttons/BlueButton';
import WhiteButton from '../buttons/WhiteButton';
import BlankStar from '../stars/BlankStar';
import YellowStar from '../stars/YellowStar';

const Feedback = () => {
  const [rate, setRate] = useState(0);
  const maxRating = 5;  
  function setRating(index) {
    setRate(index);
  }

  const renderStar = (index) => {
    return index < rate ? <YellowStar /> : <BlankStar />;
  }


  function eventHandler() {
    console.log("hello");
  }

  const rightBarProps = {
    imageUrl: navRating,
    title: "Give us your feedback now!",
    description: "Please fill out the form to get started."
  };

  const BlueButtonProps = {
    eventHandler: eventHandler,
    description: "Submit Application"
  };

  const WhiteButtonProps = {
    eventHandler: eventHandler,
    description: "Cancel"
  };

  return (
    <div className="absolute w-full h-screen px-1 sm:px-4 md-8 lg:px-16 py-1 sm:py-4 lg:py-10 bg-[#D3D8DF]">
      <div className="flex flex-col sm:flex-row w-[100%] h-[100%] ">
        <LeftBar 
          firstHeading="We Value Your" 
          secondHeading="Feedback!" 
          description="Rate your experience and help us improve. Your insights make our fitness platform better for everyone!"
          imageUrl={rating}
        />
        <RightBar props={rightBarProps}>
          <div className="w-full h-full">
            <div className="flex-1 h-full flex-col">
              <div className="flex-1">
                <div className="text-left text-2xl mt-4 mb-8 my-16" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0)' }}>
                  <div className=' flex flex-col items-center'>
                  <div className='bg-[#005EFF] w-[55%] h-0.5 flex justify-center m-2'></div>
                  <div className="font-extrabold text-2xl font-plus-jakarta">Rate your experience!</div>
                  <div className="flex flex-row space-x-4 mt-4 p-2">
                    {/* Map the stars dynamically based on the rating */}
                    {Array.from({ length: maxRating }, (_, index) => (
                      <div
                        key={index}
                        onClick={() => setRating(index + 1)} 
                      >
                        {renderStar(index)}
                      </div>
                    ))}
                  </div>
                  <div className='bg-[#005EFF] w-[85%] h-0.5 flex justify-center mt-2 mb-6'></div>
                  <div className='bg-[#005EFF] w-[25%] h-0.5 flex justify-center mb-2'></div>
                  </div>
                </div>
                <div>
                <Label>Nice! Do you mind telling us about your experience?</Label>
                <div className="w-full h-32 rounded-md border-2 border-spacing-2 p-2">
                  <InputText>FitFlare is perfect for students</InputText>
                </div>
              </div>
              <div className="flex-1 flex-col align-baseline justify-end">
                <BlueButton props={BlueButtonProps} />
                <WhiteButton props={WhiteButtonProps} />
              </div>
              </div>

            </div>
          </div>
        </RightBar>
      </div>
    </div>
  );
};

export default Feedback;
