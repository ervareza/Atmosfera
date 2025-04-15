// components/Weather/WeatherCard.js
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { 
  Thermometer,
  Droplet,
  Wind,
  Sunset,
  Sun,
  Cloud,
  CloudDrizzle,
  CloudSnow,
  CloudLightning
} from 'lucide-react';
import GlassmorphicContainer from '../Layout/GlassmorphicContainer';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring', 
      stiffness: 120 
    }
  },
  hover: { 
    y: -5,
    scale: 1.02,
    transition: { 
      type: 'spring', 
      stiffness: 300 
    }
  }
};

const WeatherIcon = ({ condition, size }) => {
  const iconMap = {
    clear: Sun,
    cloudy: Cloud,
    rain: CloudDrizzle,
    snow: CloudSnow,
    thunderstorm: CloudLightning,
  };

  const IconComponent = iconMap[condition.toLowerCase()] || Sun;

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`${size} text-amber-400 dark:text-cyan-400`}
    >
      <IconComponent className="w-full h-full" />
    </motion.div>
  );
};

const WeatherStat = ({ iconName, label, value }) => {
  const IconComponent = () => {
    switch(iconName) {
      case 'Thermometer':
        return <Thermometer className="w-6 h-6 text-cyan-400" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-cyan-400" />;
      case 'Wind':
        return <Wind className="w-6 h-6 text-cyan-400" />;
      case 'Sunset':
        return <Sunset className="w-6 h-6 text-cyan-400" />;
      default:
        return null;
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl"
    >
      <IconComponent />
      <div>
        <p className="text-sm text-white/70">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  );
};

export default function WeatherCard({ 
  day,
  date,
  condition,
  temperature,
  humidity,
  windSpeed,
  isCurrent = false
}) {
  return (
    <GlassmorphicContainer>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={`p-6 ${isCurrent ? 'min-w-[280px]' : 'min-w-[200px]'}`}
      >
        <div className="flex flex-col items-center space-y-4">
          <motion.div 
            className="text-center"
            animate={isCurrent ? { scale: 1.05 } : { scale: 1 }}
          >
            <p className="text-lg font-semibold text-white">{day}</p>
            <p className="text-sm text-white/80">{date}</p>
          </motion.div>

          <WeatherIcon 
            condition={condition} 
            size={isCurrent ? 'w-20 h-20' : 'w-16 h-16'}
          />

          <div className="text-center space-y-2">
            <p className="text-3xl font-bold text-white">{temperature}</p>
            <p className="text-sm text-white/90">{condition}</p>
          </div>

          {isCurrent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 gap-4 w-full pt-4"
            >
              <WeatherStat 
                iconName="Droplet" 
                label="Humidity" 
                value={`${humidity}%`} 
              />
              <WeatherStat 
                iconName="Wind" 
                label="Wind Speed" 
                value={`${windSpeed} km/h`} 
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </GlassmorphicContainer>
  );
}