import React from 'react'
import Label from '../Label'
import InputText from '../InputText'
import BlueButton from '../buttons/BlueButton'
import WhiteButton from '../buttons/WhiteButton'
import HomeWhiteButton from '../buttons/HomeWhiteButton'
import useFormContext from '../../hooks/useFormContext'


const Registration = () => {
    function eventHandler(){
        console.log("hello")
      }
    
    const {
        page,
        setPage,
        handleChange,
        errors,
        data, title, canSubmit
    } = useFormContext()
    
      const BlueButtonProps = {
        eventHandler: eventHandler,
        description: "Detect current location"
      };
      const WhiteButtonProps = {
        eventHandler: eventHandler,
        description: "Cancel"
      };
      console.log(data)

      
  return (
    <div className='w-full h-full'>
            <div className='flex-1 flex-col'>
          <div className='flex flex-col md:flex-row md:justify-between '>
            {console.log(title[page])}
              <div className='flex-1 flex-row'>
                <div className='mb-1 '>
                  <Label>First name</Label>
                </div>
                  <HomeWhiteButton name="firstName" value={data?.firstName || ''} eventHandler={handleChange} inputType="text" />
              </div>

                <div className='flex-1 flex-col items-start'>
                  <div className='mb-1'>
                    <Label>Last name</Label>
                  </div>
                  <HomeWhiteButton eventHandler={eventHandler} inputType="text" />
                </div>
          </div>
          <div className='flex flex-col md:flex-row md:justify-between mt-8'>
              <div className='flex-1 flex-row'>
                <div className='mb-1'>
                  <Label>Email</Label>
                </div>
                  <HomeWhiteButton eventHandler={eventHandler} inputType="text" />

              </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between mt-8'>
              <div className='flex-1 flex-col'>
                <div className='mb-1 '>
                  <Label>State</Label>
                </div>
                <HomeWhiteButton eventHandler={eventHandler} inputType="text" />
              </div>

                <div className='flex-1 flex-col items-start'>
                  <div className='mb-1'>
                    <Label>City</Label>
                  </div>
                  <HomeWhiteButton eventHandler={eventHandler} inputType="text" />
                </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between mt-8'>
              <div className='flex-1 flex-col'>
                <div className='mb-1 '>
                  <Label>Postal Code</Label>
                </div>
                <HomeWhiteButton eventHandler={eventHandler} inputType="text" />
              </div>

                <div className='flex-1 flex-col items-start'>
                  <div className='mb-1'>
                    <Label>Phone number</Label>
                  </div>
                  <HomeWhiteButton eventHandler={eventHandler} inputType="text" />
                </div>
          </div>
          <div className='flex-1 flex-col'> 
          <BlueButton props={BlueButtonProps} />
          <WhiteButton props={WhiteButtonProps} />

          </div>

         </div>
        </div>

  )
}

export default Registration