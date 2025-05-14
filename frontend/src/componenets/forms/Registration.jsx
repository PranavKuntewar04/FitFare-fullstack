import Label from '../Label';
import HomeWhiteButton from '../buttons/HomeWhiteButton';
import WhiteButton from '../buttons/WhiteButton';
import useFormContext from '../../hooks/useFormContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import BlueButton from '../buttons/BlueButton';

const Registration = () => {
  const { handleChange, errors, data, canSubmit } = useFormContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleClick = async () => {
    try {
      setLoading(true);
      if (canSubmit) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
  
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        
        const res = await axios.post('http://localhost:3000/register', {
          email: data.email,
          phone: data.phoneNumber,
          firstName: data.firstName,
          lastName: data.lastName,
          city: data.city,
          postalCode: data.postalCode,
        })

        const userId = res.data.id;
        localStorage.setItem("user", JSON.stringify({ ...data, id: userId, lat: lat, lng: lng }));
        navigate("/location")
      } else {
        alert("Fill the required field!")
      }
    } catch(error) {
      console.log("Error: ", error)
    } finally {
      setLoading(false)
    }
  };

  // const WhiteButtonProps = {
  //   disabled: loading,
  //   eventHandler: handleClick,
  //   description: "Next"
  // };

  const BlueButtonProps = {
    disabled: loading,
    eventHandler: handleClick,
    description: "Detect current location"
  };

  return ( 
    <div className="w-full h-full flex flex-col gap-4 justify-between ">
      {/* Email */}
      <div className="w-full">
        <Label>Email</Label>
        <HomeWhiteButton name="email" value={data?.email || ''} eventHandler={handleChange} inputType="text" />
      </div>

      {/* First & Last Name */}
      <div className="flex flex-col gap-4 md:flex-row md:space-x-4">
        <div className="flex-1">
          <Label>First name</Label>
          <HomeWhiteButton name="firstName" value={data?.firstName || ''} eventHandler={handleChange} inputType="text" />
        </div>
        <div className="flex-1">
          <Label>Last name</Label>
          <HomeWhiteButton name="lastName" value={data?.lastName || ''} eventHandler={handleChange} inputType="text" />
        </div>
      </div>

      {/* Postal Code & Phone Number */}
      <div className="flex flex-col gap-4 md:flex-row md:space-x-4">
        <div className="flex-1">
          <Label>City</Label>
          <HomeWhiteButton name="city" value={data?.postalCode || ''} eventHandler={handleChange} inputType="text" />
        </div>
        <div className="flex-1">
          <Label>Postal Code</Label>
          <HomeWhiteButton name="postalCode" value={data?.postalCode || ''} eventHandler={handleChange} inputType="text" />
        </div>
      </div>

      <div className="w-full">
        <Label>Phone number</Label>
        <HomeWhiteButton name="phoneNumber" value={data?.phoneNumber || ''} eventHandler={handleChange} inputType="text" />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col">
        <BlueButton props={BlueButtonProps} />
      </div>
    </div>
  );
};

export default Registration;
