// components/UI/DynamicGradientText.js
import { motion } from 'framer-motion';

export default function DynamicGradientText({ children }) {
  return (
    <motion.span
      initial={{ backgroundPosition: '0% 50%' }}
      animate={{ backgroundPosition: '100% 50%' }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'mirror',
      }}
      className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-[length:300%_100%]"
    >
      {children}
    </motion.span>
  );
}