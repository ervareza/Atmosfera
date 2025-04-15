// components/Weather/HourlyForecast.js
'use client';
import { motion } from 'framer-motion';
import WeatherIcon from './WeatherIcon';
import ClientOnly from '../ClientOnly';

export default function HourlyForecast({ data }) {
  return (
    <ClientOnly>
      <div className="overflow-x-auto pb-4">
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          suppressHydrationWarning
        >
          {data.map((hour, index) => (
            <motion.div
              key={`hour-${index}`}
              className="bg-white/50 dark:bg-gray-800/20 p-4 rounded-xl min-w-[100px] text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm mb-2">{hour.time}</p>
              <WeatherIcon 
                condition={hour.condition} 
                size="w-12 h-12 mx-auto"
              />
              <p className="text-xl font-bold mt-2">{hour.temp}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ClientOnly>
  );
}