import { motion } from 'framer-motion';

const ProgressIndicator = ({ currentStep, totalSteps = 4 }) => {
  return (
    <div className="progress-dots">
      {[...Array(totalSteps)].map((_, index) => (
        <motion.div
          key={index}
          className={`progress-dot ${index === currentStep - 1 ? 'progress-dot-active' : ''}`}
          initial={{ scale: 0.8, opacity: 0.7 }}
          animate={{ 
            scale: index === currentStep - 1 ? 1.2 : 1,
            opacity: index === currentStep - 1 ? 1 : 0.7,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;