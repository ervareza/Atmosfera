// components/Layout/AnimatedBackground.js
import { motion } from 'framer-motion';

const particles = Array(30).fill().map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  scale: Math.random() * 0.5 + 0.5,
  duration: Math.random() * 4 + 2
}));

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden opacity-20 dark:opacity-30">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            scale: particle.scale,
            opacity: 0
          }}
          animate={{
            y: [`${particle.y}%`, `${particle.y + 20}%`, `${particle.y}%`],
            opacity: [0, 0.5, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            willChange: 'transform, opacity'
          }}
        />
      ))}
    </div>
  );
}