import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import InfoPanel from '../components/InfoPanel';
import ContentPanel from '../components/ContentPanel';
import Button from '../components/Button';
import StarRating from '../components/StarRating';

// Illustration for feedback page
import FeedbackIllustration from '../assets/FeedbackIllustration';
import axios from 'axios';

const FeedbackPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4);
  const [feedbackText, setFeedbackText] = useState('');
  
  const handleRatingChange = (value) => {
    setRating(value);
  };
  
  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user.id;
      console.log("User id: ", userId);
  
      const res = await axios.post("http://localhost:3000/feedback", {
        userId: userId,
        message: feedbackText,
        rating: rating
      });
      
      alert('Thank you for your feedback!');
    } catch(error) {
      alert("Something went wrong!!");
      console.log("Error while submitting feedback:\n", error)
    } finally {
      navigate('/');
    }
  };
  
  const handleCancel = () => {
    navigate('/results');
  };

  return (
    <PageTransition>
      <div className="layout-container">
        <InfoPanel
          title="We Value Your Feedback!"
          description="Rate your experience and help us improve. Your insights make our fitness platform better for everyone!"
        >
          <FeedbackIllustration />
        </InfoPanel>

        <ContentPanel title="Give us your feedback now!" step={4}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-center">Rate your experience!</h3>
              <div className="flex justify-center">
                <StarRating 
                  value={rating} 
                  onChange={handleRatingChange} 
                />
              </div>
              <div className="border-t border-b border-neutral-200 py-4">
                <p className="text-sm text-neutral-600 mb-2">
                  Nice! Do you mind telling us about you experience?
                </p>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Share your thoughts..."
                  value={feedbackText}
                  onChange={handleFeedbackChange}
                />
              </div>
            </div>
            
            <div className="pt-2">
              <Button type="submit" variant="primary" fullWidth>
                Submit Application
              </Button>
              
              <div className="mt-4">
                <Button onClick={handleCancel} variant="secondary" fullWidth>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </ContentPanel>
      </div>
    </PageTransition>
  );
};

export default FeedbackPage;