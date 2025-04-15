// components/Weather/TemperatureChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useThemeStore } from '../../store/themeStore';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
} from 'chart.js';
import GlassmorphicContainer from '../Layout/GlassmorphicContainer';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

export default function TemperatureChart({ data }) {
  const { darkMode } = useThemeStore();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: darkMode ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.9)',
        bodyColor: darkMode ? '#fff' : '#1f2937',
        titleColor: darkMode ? '#fff' : '#1f2937',
        borderColor: 'rgba(255,255,255,0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: darkMode ? '#fff' : '#1f2937' }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.1)' },
        ticks: { color: darkMode ? '#fff' : '#1f2937' }
      }
    }
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        borderColor: darkMode ? '#22d3ee' : '#3b82f6',
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: darkMode ? '#22d3ee' : '#3b82f6',
        fill: {
          target: 'origin',
          above: darkMode 
            ? 'rgba(34,211,238,0.1)' 
            : 'rgba(59,130,246,0.1)'
        },
        tension: 0.4
      }
    ]
  };

  return (
    <GlassmorphicContainer className="h-96 p-6">
      <Line data={chartData} options={options} />
    </GlassmorphicContainer>
  );
}