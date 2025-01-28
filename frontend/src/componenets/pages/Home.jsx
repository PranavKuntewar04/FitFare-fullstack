import React from 'react'
import LeftBar from '../LeftBar'
import RightBar from '../RightBar'
import navSignUp from '../../assets/pre-register/nav-signup.png'
import signUp from '../../assets/pre-register/signup.png'
import Registration from '../forms/Registration'


const Home = () => {

  const rightBarProps = {
    imageUrl: navSignUp,
    title: "Let's get started",
    description: "Please fill out the form to get started."
  };

  return (
    <div className='absolute w-screen h-screen px-1 sm:px-4 md-8 lg:px-16 py-1 sm:py-4 lg:py-10 bg-[#D3D8DF]'>
      <div className='flex flex-col lg:flex-row w-[100%] h-[100%] '>
      <LeftBar 
      firstHeading="No Memberships!" 
      secondHeading="Just Pay Per Use" 
      description="No monthly fees, and no long-term contacts. Explore fitness options nearby and pay only for what you use."
      imageUrl={signUp}
      />
      <RightBar props={rightBarProps}>
          <Registration />
      </RightBar>
      </div>
    </div>
  )
}

export default Home