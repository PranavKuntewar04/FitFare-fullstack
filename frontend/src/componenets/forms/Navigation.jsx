import { useEffect, useState } from 'react'
import BlueButton from '../buttons/BlueButton'
import Map from '../Map'
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const Navigation = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function eventHandler() {
    try {
      setLoading(true);

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const storageItem = localStorage.getItem("user");
      const localUser = JSON.parse(storageItem);
      localUser.lat = lat;
      localUser.lng = lng;

      setUser(localUser);
      localStorage.setItem("user", JSON.stringify(localUser));
    } catch(error) {
      console.log("Error while fetch location: ", error);
    } finally {
      setLoading(false);
    }
  }
  
  const ToGymPage = () => {
    navigate("/gyms");
  }

  const BlueButtonProps = {
    disabled: loading,
    eventHandler: eventHandler,
    description: "Detect current location"
  };

  const FindGyms = {
    eventHandler: ToGymPage,
    description: "Find Gyms nearby "
  };

  return (
    <div className='w-full'>
      <div className='flex-1 h-full flex-col'>
        {user && user.lat && user.lng ? 
        <>
        {loading ? 
        <div className='w-full h-full justify-center items-center'>
          <Loader2 className='animate-spin' /> 
        </div>  :
        <>
            <Map lat={user.lat} lng={user.lng} />
            <BlueButton props={FindGyms} />
        </>}
        </> : <>
          <div className='flex-1 h-[20%]'>
            <div className='flex-1 flex-col mt-6'>
              
            </div>
          </div>
          <div className='flex-col justify-end'> 
            <BlueButton props={BlueButtonProps} />
          </div>
        </> 
        }
      </div>
    </div>
  )
}

export default Navigation