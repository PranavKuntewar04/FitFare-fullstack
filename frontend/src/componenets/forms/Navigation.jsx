import { useEffect, useState } from 'react'
import BlueButton from '../buttons/BlueButton'
import Map from '../Map'
import { useNavigate } from 'react-router-dom';
import { Loader2, MapPinIcon } from 'lucide-react';
import axios from 'axios';

const Navigation = () => {
  const [user, setUser] = useState();
  const [locality, setLocality] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function detectLoaction() {
    try { 
      setLoading(true)

      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true
        });
      });

      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      const storageItem = localStorage.getItem("user");
      const localUser = JSON.parse(storageItem);
      localUser.lat = lat;
      localUser.lng = lng;

      localStorage.setItem("user", JSON.stringify(localUser))
      setUser(localUser)
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getLocality() {
    try {
      setLoading(true);

      const storageItem = localStorage.getItem("user");
      const localUser = JSON.parse(storageItem);
      const lat = localUser.lat;
      const lng = localUser.lng;

      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`)
      setLocality(response.data.results[0].formatted_address);

      setUser(localUser);
    } catch(error) {
      console.log("Error while fetch location: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLocality();
  }, []);
  
  const ToGymPage = () => {
    navigate("/gyms");
  }

  const BlueButtonProps = {
    disabled: loading,
    eventHandler: detectLoaction,
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
          </div> :
          <>
              <Map lat={user.lat} lng={user.lng} />
              <div className='mt-4 flex items-center gap-2'>
                <MapPinIcon size={50} className='text-rose-5  00' />  
                <div className='p-2 border-2 rounded-md text-sm font-plus-jakarta text-gray-600'>
                  {locality}
                </div>
              </div>
              <BlueButton props={FindGyms} />
          </>}
        </> : <>
          <div className='flex-1 h-[20%]'>
            <div className='flex-1 flex-col mt-6'>
              <BlueButton props={BlueButtonProps} />
            </div>
          </div>
        </> 
        }
      </div>
    </div>
  )
}

export default Navigation