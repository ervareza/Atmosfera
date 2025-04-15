import { motion } from 'framer-motion';
import {
  Thermometer,
  Droplet,
  Wind,
  Sunset,
  Cloud,
  Eye
} from 'lucide-react';

const iconMap = {
  Thermometer: Thermometer,
  Droplet: Droplet,
  Wind: Wind,
  Sunset: Sunset,
  Cloud: Cloud,
  Eye: Eye
};

export default function WeatherStat({ icon, label, value }) {
  const IconComponent = iconMap[icon];
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl"
    >
      {IconComponent && <IconComponent className="w-6 h-6 text-cyan-400" />}
      <div>
        <p className="text-sm text-white/70">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </motion.div>
  );
}