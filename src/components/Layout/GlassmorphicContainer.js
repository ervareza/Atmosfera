// components/Layout/GlassmorphicContainer.js
import { motion } from 'framer-motion';

export default function GlassmorphicContainer({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`backdrop-blur-lg bg-white/20 dark:bg-gray-800/30 rounded-xl shadow-lg border border-white/30 ${className}`}
    >
      {children}
    </motion.div>
  );
}