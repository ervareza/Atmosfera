// components/Weather/WeatherGrid.js
import React from 'react';
import { motion } from 'framer-motion';
import WeatherCard from './WeatherCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function WeatherGrid({ data, isDaily = true }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${isDaily ? '5' : '7'} gap-4`}
    >
      {data.map((item, index) => (
        <WeatherCard
          key={index}
          day={item.day}
          date={item.date}
          condition={item.condition}
          temperature={item.temperature}
          humidity={item.humidity}
          windSpeed={item.windSpeed}
          isCurrent={index === 0 && isDaily}
        />
      ))}
    </motion.div>
  );
}