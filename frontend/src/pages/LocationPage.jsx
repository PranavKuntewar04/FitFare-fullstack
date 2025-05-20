import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import InfoPanel from '../components/InfoPanel';
import ContentPanel from '../components/ContentPanel';
import Button from '../components/Button';
import TextField from '../components/TextField';
import ErrorBoundary from '../components/ErrorBoundary';
import Map from '../components/Map';

import axios from 'axios';

// Map placeholder illustration
import LocationIllustration from '../assets/LocationIllustration';
import MapImage from '../assets/MapImage';

const LocationPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [location, setLocation] = useState('');

  async function getLocality() {
    try {
      const storageItem = localStorage.getItem("user");
      const localUser = JSON.parse(storageItem);
      setUser(localUser);
      const lat = localUser.latitude;
      const lng = localUser.longitude;

      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`)

      setLocation(response.data.results[0].formatted_address);
    } catch(error) {
      console.log("Error while fetch location: ", error);
    }
  }

  useEffect(() => {
    getLocality();
  }, [])

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearchClick = () => {
    navigate('/results');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <PageTransition>
      <div className="layout-container">
        <InfoPanel
          title="Discover Fitness Near You Today"
          description="Share your location to explore fitness clubs within 10 km. Choose your favorite, make an offer, and start your fitness journey hassle-free!"
        >
          <LocationIllustration />
        </InfoPanel>

        <ContentPanel title="Find fitness options nearby!" step={2}>
          <div className="mb-6 rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
            {/* <MapImage /> */}
            <ErrorBoundary>
              <Map lat={user.latitude} lng={user.longitude} />
            </ErrorBoundary>
            
          </div>
          
          <div className="mb-6">
            <TextField
              label="Location"
              id="location"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter your location"
            />
          </div>
          
          <div className="pt-4">
            <Button onClick={handleSearchClick} variant="primary" fullWidth>
              Search clubs near me
            </Button>
            
            <div className="mt-4">
              <Button onClick={handleCancel} variant="secondary" fullWidth>
                Cancel
              </Button>
            </div>
          </div>
        </ContentPanel>
      </div>
    </PageTransition>
  );
};

export default LocationPage;