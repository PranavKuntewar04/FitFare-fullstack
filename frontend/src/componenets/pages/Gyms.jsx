import LeftBar from '../LeftBar'
import RightBar from '../RightBar'
import navLocation from '../../assets/pre-register/nav-location.png'
import locationLeft from '../../assets/pre-register/locationLeft.png'
import actualGym from '../../assets/pre-register/actualGym.png'
import GymCard from '../cards/GymCard'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import { Loader2 } from 'lucide-react'

const Location = () => {
  const [loading, setLoading] = useState(false);
  const data = JSON.parse(localStorage.getItem("user"));
  const [gyms, setGyms] = useState();

  const fetchGyms = async () => {
    const response = await axios.post("http://localhost:3000/gyms", {
        type: "gym",
        lat: data.lat,
        lng: data.lng
    });
    const gymsRes = response.data;
    setGyms(gymsRes.gyms)
  }

  useEffect(() => {
    setLoading(true);
    fetchGyms();
    setLoading(false);
  }, [])

  const rightBarProps = {
    imageUrl: navLocation,
    title: "Find fitness options nearby! ",
    description: "Please fill out the form to get started."
  };

  return (
  <div className='absolute w-full h-screen sm:px-4 md-8 lg:px-16 py-1 sm:py-4 lg:py-10 bg-[#D3D8DF]'>
  <div className='flex flex-col sm:flex-row w-[100%] h-[100%] '>
    <LeftBar 
      firstHeading="Discover Fitness" 
      secondHeading="Near You Today" 
      description="Share your location to explore fitness clubs within 10km. Choose your favourite, make an offer, and start your fitness journey hassle-free!"
      imageUrl={locationLeft}
    />
    <RightBar props={rightBarProps}>
      <div className='w-full h-full'>
        <div className='h-full flex flex-col it gap-8'>
          {loading ? <>
            <Loader2 className='animate-spin' />
          </> : <>
            {gyms && gyms.map((gym) =>
              <GymCard 
                key={gym.place_id}
                name={gym.name}
                address={gym.vicinity}
                rating={gym.rating}
                total_rating={gym.user_ratings_total}
                imageUrl={actualGym}
              />
            )}
          </>}
        </div>
      </div>
    </RightBar>
  </div>
</div>

  )
}

export default Location