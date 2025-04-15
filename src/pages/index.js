// pages/index.js
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../store/themeStore';
import WeatherGrid from '../components/Weather/WeatherGrid';
import TemperatureChart from '../components/Weather/TemperatureChart';
import HourlyForecast from '../components/Weather/HourlyForecast';
import WeatherIcon from '../components/Weather/WeatherIcon';
import DynamicGradientText from '../components/UI/DynamicGradientText';
import GlassmorphicContainer from '../components/Layout/GlassmorphicContainer';
import DarkModeToggle from '../components/DarkModeToggle';
import WeatherStat from '../components/UI/WeatherStat';
import { 
  hourlyData,
  dailyData,
  weeklyData,
  chartData,
  currentWeather
} from '../data/weatherData';

export default function Home() {
  const { darkMode } = useThemeStore();

  return (
    <><Head>
      <title>Atmosfera - Weather Forecast Dashboard</title>
      <meta
        name="description"
        content="Real-time weather updates with interactive charts and predictions. Check hourly temperature, precipitation chance, and weekly forecasts." />
      <link rel="icon" href="/favicon.ico" />
    </Head><AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-100 to-cyan-50'}`}
        >
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header Section */}
            <motion.header
              className="flex justify-between items-center"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
            >
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  <DynamicGradientText>Atmosfera</DynamicGradientText>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Weather Forecast Platform
                </p>
              </div>
              <DarkModeToggle />
            </motion.header>

            {/* Current Weather Section */}
            <motion.section
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
            >
              <GlassmorphicContainer>
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Now</h2>
                    <p className="text-5xl font-bold text-white">
                      {currentWeather.temp}
                    </p>
                    <p className="text-xl text-white/90">
                      {currentWeather.condition}
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <WeatherIcon
                      condition={currentWeather.condition}
                      size="w-32 h-32" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <WeatherStat
                      icon="Thermometer"
                      label="Feels Like"
                      value={currentWeather.feelsLike} />
                    <WeatherStat
                      icon="Droplet"
                      label="Humidity"
                      value={`${currentWeather.humidity}%`} />
                    <WeatherStat
                      icon="Wind"
                      label="Wind"
                      value={`${currentWeather.windSpeed} km/h`} />
                    <WeatherStat
                      icon="Sunset"
                      label="Sunset"
                      value={currentWeather.sunset} />
                  </div>
                </div>
              </GlassmorphicContainer>
            </motion.section>

            {/* Hourly Forecast */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Hourly Forecast</h2>
              <HourlyForecast data={hourlyData} />
            </section>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 5-Day Forecast */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5-Day Forecast</h2>
                <WeatherGrid data={dailyData} variant="daily" />
              </section>

              {/* Temperature Chart */}
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Temperature Trend</h2>
                <TemperatureChart data={chartData} />
              </section>
            </div>

            {/* Weekly Forecast */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7-Day Overview</h2>
              <WeatherGrid data={weeklyData} variant="weekly" />
            </section>
          </div>
        </motion.main>
      </AnimatePresence></>
  );
}