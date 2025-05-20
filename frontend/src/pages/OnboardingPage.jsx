import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import InfoPanel from '../components/InfoPanel';
import ContentPanel from '../components/ContentPanel';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import Button from '../components/Button';

// Illustration image for the onboarding page
import OnboardingIllustration from '../assets/OnboardingIllustration';
import axios from 'axios';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    state: 'Maharashtra',
    city: 'Pune',
    postalCode: '',
    phone: '',
    latitude: '',
    longitude: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  function getGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (err) => reject(err),
        {
          enableHighAccuracy: true
        }
      );
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const position = await getGeolocation();
      const { latitude, longitude } = position;

      const res = await axios.post("http://localhost:3000/register", formData);
      const updatedUser = { ...formData, id: res.data.id, latitude: latitude, longitude: longitude }
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      setFormData(updatedUser);

      navigate('/location')
    } catch (error) {
      console.log('Error submitting form:\n', error);
    }
  };

  const stateOptions = [
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Delhi', label: 'Delhi' }
  ];

  const cityOptions = [
    { value: 'Pune', label: 'Pune' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' }
  ];

  return (
    <div className="layout-container">
      <InfoPanel
        title="No Memberships! Just Pay Per Use"
        description="No monthly fees, and no long-term contracts. Explore fitness options nearby and pay only for what you use."
      >
        <OnboardingIllustration />
      </InfoPanel>

      <ContentPanel title="Let's get started" step={1}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="First name"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
            />
            <TextField
              label="Last name"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
          </div>

          <TextField
            label="Email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />

          <div className="grid grid-cols-2 gap-4">
            <SelectField
              label="State"
              id="state"
              options={stateOptions}
              value={formData.state}
              onChange={handleChange}
            />
            <SelectField
              label="City"
              id="city"
              options={cityOptions}
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <TextField
              label="Postal code"
              id="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="411048"
            />
            <TextField
              label="Phone number"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="9876543210"
            />
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" fullWidth>
              Detect current location
            </Button>

            <div className="mt-4">
              <Button variant="secondary" fullWidth>
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </ContentPanel>
    </div>
  );
};

export default OnboardingPage;
