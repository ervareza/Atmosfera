// src/data/weatherData.js
import dayjs from "dayjs";

export const currentWeather = {
  temp: "28°C",
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 15,
  uvIndex: "3 Moderate",
  precipitation: "10%",
  feelsLike: "30°C",
  visibility: "10 km",
  pressure: "1014 hPa",
  sunset: "18:45",
  sunrise: "05:30",
  airQuality: "Moderate",
};

export const dailyData = [
  {
    day: dayjs().format("ddd"),
    date: dayjs().format("DD MMM"),
    condition: "Clear",
    temperature: "30°C",
    humidity: 60,
    windSpeed: 12,
    precipitation: "0%",
    uvIndex: "5",
  },
  {
    day: dayjs().add(1, "day").format("ddd"),
    date: dayjs().add(1, "day").format("DD MMM"),
    condition: "Cloudy",
    temperature: "27°C",
    humidity: 70,
    windSpeed: 18,
    precipitation: "20%",
    uvIndex: "3",
  },
  {
    day: dayjs().add(2, "day").format("ddd"),
    date: dayjs().add(2, "day").format("DD MMM"),
    condition: "Rain",
    temperature: "25°C",
    humidity: 85,
    windSpeed: 15,
    precipitation: "90%",
    uvIndex: "1",
  },
  {
    day: dayjs().add(3, "day").format("ddd"),
    date: dayjs().add(3, "day").format("DD MMM"),
    condition: "Thunderstorm",
    temperature: "26°C",
    humidity: 78,
    windSpeed: 22,
    precipitation: "100%",
    uvIndex: "2",
  },
  {
    day: dayjs().add(4, "day").format("ddd"),
    date: dayjs().add(4, "day").format("DD MMM"),
    condition: "Snow",
    temperature: "-2°C",
    humidity: 90,
    windSpeed: 10,
    precipitation: "75%",
    uvIndex: "1",
  },
];

export const weeklyData = [
  ...dailyData,
  {
    day: dayjs().add(5, "day").format("ddd"),
    date: dayjs().add(5, "day").format("DD MMM"),
    condition: "Clear",
    temperature: "29°C",
    humidity: 65,
    windSpeed: 14,
    precipitation: "0%",
    uvIndex: "5",
  },
  {
    day: dayjs().add(6, "day").format("ddd"),
    date: dayjs().add(6, "day").format("DD MMM"),
    condition: "Cloudy",
    temperature: "26°C",
    humidity: 75,
    windSpeed: 16,
    precipitation: "15%",
    uvIndex: "3",
  },
];

// Helper untuk data deterministik
const generateHourlyData = () => {
  const baseDate = dayjs().startOf("day");
  return Array.from({ length: 24 }).map((_, index) => {
    const hourVariation = index % 4; // Pola berulang setiap 4 jam
    return {
      time: baseDate.add(index, "hour").format("HH:mm"),
      temp: `${25 + hourVariation * 2}°C`,
      condition: ["Clear", "Cloudy", "Rain", "Thunderstorm"][hourVariation],
      humidity: 60 + hourVariation * 10,
      windSpeed: 10 + hourVariation * 3,
    };
  });
};

export const hourlyData = generateHourlyData();

export const chartData = {
  labels: weeklyData.map((item) => item.day),
  values: weeklyData.map((item) =>
    parseInt(item.temperature.replace("°C", ""))
  ),
};

export const airQualityData = {
  index: 45,
  level: "Good",
  pollutants: {
    pm2_5: 12.3,
    pm10: 24.7,
    so2: 5.6,
    no2: 10.2,
    o3: 32.1,
  },
};

export const weatherDetails = {
  feelsLike: "31°C",
  visibility: "10 km",
  dewPoint: "18°C",
  cloudCover: "40%",
  moonPhase: "Waxing Crescent",
};
