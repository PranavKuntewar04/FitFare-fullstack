import React from 'react'
import LeftBar from '../LeftBar'
import RightBar from '../RightBar'
import navLocation from '../../assets/pre-register/nav-location.png'
import locationLeft from '../../assets/pre-register/locationLeft.png'
import mapImage from '../../assets/pre-register/map.png'
import Label from '../Label'
import InputText from '../InputText'
import BlueButton from '../buttons/BlueButton'
import WhiteButton from '../buttons/WhiteButton'
import gpsImg from '../../assets/pre-register/gps.png'

const Navigation = () => {
    function eventHandler(){
        console.log("hello")
      }
      const BlueButtonProps = {
        eventHandler: eventHandler,
        description: "Detect current location"
      };
      const WhiteButtonProps = {
        eventHandler: eventHandler,
        description: "Cancel"
      };
  return (
    <div className='w-full h-full'>
        <div className='flex-1 h-full flex-col'>
          <div className='items-center align-middle justify-center'>
            <img src={mapImage}></img>
          </div>
          <div className='flex-1 h-[20%]'>
          <div className='flex-1 flex-col mt-6'>
            <div className='mb-1 '>
                  <Label>Location</Label>
                </div>
                <div className='w-[100%] border rounded-md border-spacing-2'>
                <div className='my-2 ml-4 flex flex-row justify-between pr-8'>
                  <div>
                  <InputText>WeWork Office Space</InputText>
                  </div>
                  <div>
                  <img src={gpsImg} alt="GPS Icon" />
                  </div>
                </div>
          </div>
          </div>
          </div>
          <div className='flex-1 flex-col align-baseline  justify-end'> 
          <BlueButton props={BlueButtonProps} />
          <WhiteButton props={WhiteButtonProps} />

          </div>

        </div>
      </div>
  )
}

export default Navigation