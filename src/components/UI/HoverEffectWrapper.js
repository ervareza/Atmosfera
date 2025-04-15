// components/UI/HoverEffectWrapper.js
import { motion } from 'framer-motion';

export default function HoverEffectWrapper({ 
  children, 
  scale = 1.05, 
  rotate = 2, 
  className 
}) {
  return (
    <motion.div
      whileHover={{ 
        scale: scale,
        rotate: rotate,
        transition: { 
          type: "spring",
          stiffness: 300,
          damping: 10 
        }
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}