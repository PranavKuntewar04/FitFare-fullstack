import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();
  
  return (
    <motion.button
      onClick={() => navigate(-1)}
      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/40 mb-6"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6"/>
      </svg>
    </motion.button>
  );
};

export default BackButton;