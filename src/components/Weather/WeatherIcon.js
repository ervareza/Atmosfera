// components/Weather/WeatherIcon.js
'use client';
import { motion } from 'framer-motion';
import {
  Sun,
  Cloud,
  CloudDrizzle,
  CloudSnow,
  CloudLightning
} from 'lucide-react';

const iconMap = {
  clear: Sun,
  cloudy: Cloud,
  rain: CloudDrizzle,
  snow: CloudSnow,
  thunderstorm: CloudLightning
};

export default function WeatherIcon({ condition, size = 'w-12 h-12' }) {
  const normalizedCondition = condition.toLowerCase().replace(/ /g, '');
  const IconComponent = iconMap[normalizedCondition] || Sun;

  return (
    <motion.div
      className={`${size} text-amber-400 dark:text-cyan-400`}
      suppressHydrationWarning
    >
      <IconComponent className="w-full h-full" />
    </motion.div>
  );
}