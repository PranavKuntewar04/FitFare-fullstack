import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import OnboardingPage from './pages/OnboardingPage';
import LocationPage from './pages/LocationPage';
import ResultsPage from './pages/ResultsPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  const location = useLocation();

  return (
    <div className="App font-sans bg-neutral-50 min-h-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
