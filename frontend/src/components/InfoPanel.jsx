import { motion } from 'framer-motion';

const InfoPanel = ({ title, description, children }) => {
  return (
    <div className="info-panel">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h1>
      
      <motion.p 
        className="text-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {description}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default InfoPanel;