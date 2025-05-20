import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import InfoPanel from '../components/InfoPanel';
import ContentPanel from '../components/ContentPanel';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

import axios from 'axios';

// Images and illustrations
import LocationIllustration from '../assets/LocationIllustration';
import GymImage from '../assets/GymImage';
import { useEffect, useState } from 'react';

const FitnessClubCard = ({ name, image, description, onMakeOffer }) => {
  return (
    <div className="flex flex-col md:flex-row mb-8 border-b pb-8 border-neutral-200">
      <div className="w-full md:w-48 h-32 mb-4 md:mb-0 md:mr-4 overflow-hidden rounded-md">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover bg-slate-300"
        />
      </div>
      
      <div className="flex-1">
        <p className="font-semibold mb-2 line-clamp-2">{name}</p>
        <p className="text-neutral-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-end">
          <Button onClick={onMakeOffer} variant="primary">
            Make an offer
          </Button>
        </div>
      </div>
    </div>
  );
};

const ResultsPage = () => {
  const navigate = useNavigate();
  const [fitnessClubs, setFitnessClubs] = useState([]);
  
  const handleMakeOffer = () => {
    navigate('/feedback');
  };

  async function fetchFitnessClubs() {
    const user = JSON.parse(localStorage.getItem('user'));

    const res = await axios.post('http://localhost:3000/gyms', {
      type: "gym",
      lat: user.latitude,
      lng: user.longitude
    })
    setFitnessClubs(res.data.gyms);
  } 

  useEffect(() => {
    fetchFitnessClubs();
  }, [])

  return (
    <PageTransition>
      <div className="layout-container">
        <InfoPanel
          title="Discover Fitness Near You Today"
          description="Share your location to explore fitness clubs within 10 km. Choose your favorite, make an offer, and start your fitness journey hassle-free!"
        >
          <BackButton />
          <LocationIllustration />
        </InfoPanel>

        <ContentPanel title="Find fitness options nearby!" step={3}>
          <div className="space-y-2">
            {fitnessClubs?.map((club) => (
              <FitnessClubCard
                key={club.place_id}
                name={club.name}
                description={club.vicinity}
                image={<GymImage />}
                onMakeOffer={handleMakeOffer}
              />
            ))}
          </div>
          
          <div className="mt-4">
            <Button
              onClick={() => navigate('/location')}
              variant="secondary"
              fullWidth
            >
              Cancel
            </Button>
          </div>
        </ContentPanel>
      </div>
    </PageTransition>
  );
};

export default ResultsPage;
