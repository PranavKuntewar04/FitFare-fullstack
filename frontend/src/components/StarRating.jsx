import { useState } from 'react';
import { motion } from 'framer-motion';

const StarRating = ({ value = 0, onChange, total = 5 }) => {
  const [hoverValue, setHoverValue] = useState(0);
  
  const handleMouseOver = (index) => {
    setHoverValue(index);
  };
  
  const handleMouseLeave = () => {
    setHoverValue(0);
  };
  
  const handleClick = (index) => {
    onChange(index);
  };
  
  const starVariants = {
    filled: {
      scale: 1.1,
      rotate: [0, 10, 0],
      transition: { type: 'spring', stiffness: 300, damping: 10 }
    },
    unfilled: {
      scale: 1,
      rotate: 0
    }
  };
  
  return (
    <div className="flex items-center justify-center space-x-2">
      {[...Array(total)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <motion.div
            key={index}
            variants={starVariants}
            animate={(hoverValue || value) >= ratingValue ? 'filled' : 'unfilled'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseOver={() => handleMouseOver(ratingValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(ratingValue)}
            className="cursor-pointer"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill={(hoverValue || value) >= ratingValue ? '#FFD700' : '#E2E8F0'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="#FFD700"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StarRating;