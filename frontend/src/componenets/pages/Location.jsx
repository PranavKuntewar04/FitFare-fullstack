import React from 'react'
import LeftBar from '../LeftBar'
import RightBar from '../RightBar'
import navLocation from '../../assets/pre-register/nav-location.png'
import locationLeft from '../../assets/pre-register/locationLeft.png'
import Navigation from '../forms/Navigation'

const Location = () => {
  const rightBarProps = {
    imageUrl: navLocation,
    title: "Find fitness options nearby! ",
    description: "Please fill out the form to get started."
  };

  return (
    <div className='absolute w-full h-screen px-1 sm:px-4 md-8 lg:px-16 py-1 sm:py-4 lg:py-10 bg-[#D3D8DF]'>
      <div className='flex flex-col sm:flex-row w-[100%] h-[100%] '>
        <LeftBar 
          firstHeading="Discover Fitness" 
          secondHeading="Near You Today" 
          description="Share your location to explore fitness clubs within 10km. Choose your favourite, make an offer, and start your fitness journey hassle-free!"
          imageUrl={locationLeft}
        />
        <div>
        </div>
        <RightBar props={rightBarProps}>
          <Navigation />
        </RightBar>
      </div>
    </div>
  )
}

export default Location