import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  type = 'button'
}) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const widthClasses = fullWidth ? 'w-full' : '';
  
  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${widthClasses}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;