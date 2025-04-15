# 🌦️ Atmosfera - Modern Weather Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.0-blueviolet?logo=tailwind-css)](https://tailwindcss.com/)
[![Turbopack](https://img.shields.io/badge/Turbopack-beta-blue?logo=turborepo)](https://turbo.build/pack)

A modern weather forecasting platform with beautiful visualizations and real-time updates, built with Next.js 15 and cutting-edge web technologies.

![Dashboard Preview](/public/preview.png)

## ✨ Key Features

- 🌓 **Adaptive Theme System**
  - Automatic dark/light mode based on system preference
  - Smooth theme transitions
  - Customizable color palettes

- 📊 **Data Visualization**
  - Interactive temperature charts
  - Hourly weather timeline
  - 7-day forecast overview
  - Atmospheric pressure graphs

- 🎨 **Modern UI Components**
  - Glassmorphism effects
  - Responsive grid layouts
  - Animated transitions
  - Custom scrollbars

- ⚡ **Performance Optimized**
  - Turbopack-powered development
  - Lazy-loaded components
  - Efficient state management
  - Client-side rendering for dynamic content

## 🚀 Getting Started

### Prerequisites

- Node.js v18.18.0 or higher
- npm v9.8.1 or higher
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/<your-username>/atmosfera.git
cd atmosfera
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**

Buat file `.env.local` di root project:
```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```

### Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 🛠 Tech Stack

### Core Technologies

- **Framework:** Next.js 15 + Turbopack  
- **Styling:** Tailwind CSS v4 + PostCSS  
- **Animations:** Framer Motion  
- **Charting:** Chart.js 4 + react-chartjs-2  
- **State Management:** Zustand  
- **Icons:** Lucide React  

### Key Dependencies

- `dayjs` – Date manipulation  
- `@tailwindcss/nesting` – CSS nesting support  
- `postcss-preset-env` – Modern CSS features  
- `geist` – Font system  

## 📂 Project Structure

```
src/
├─ components/
│  ├─ Weather/       # Cuaca components
│  ├─ Layout/        # Layout components
│  ├─ UI/            # UI components
├─ pages/            # Next.js pages
├─ store/            # Zustand stores
├─ styles/           # Global CSS
├─ utils/            # Helper functions
public/
├─ screenshots/      # App screenshots
```

## 🎨 Tailwind/PostCSS Configuration

Custom konfigurasi untuk Tailwind CSS v4:

```js
// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import postcssNesting from '@tailwindcss/nesting';

export default {
  plugins: [
    postcssNesting(),
    tailwindcss({
      config: {
        content: ['./src/**/*.{js,ts,jsx,tsx}'],
        theme: {
          extend: {
            colors: {
              background: 'rgb(var(--color-background))',
              foreground: 'rgb(var(--color-foreground))'
            }
          }
        }
      }
    }),
    autoprefixer
  ]
}
```

## 🤝 Contributing

### Fork Project

1. **Setup Development Environment**
```bash
git clone your-fork-url
cd atmosfera
npm install
```

2. **Buat Branch Fitur**
```bash
git checkout -b feature/your-feature
```

3. **Commit Perubahan**

Gunakan convention:
- `feat:` Untuk fitur baru
- `fix:` Untuk perbaikan bug
- `docs:` Untuk perubahan dokumentasi

```bash
git commit -m "feat: add hourly forecast component"
```

4. **Push ke Repository**
```bash
git push origin feature/your-feature
```

5. **Buka Pull Request**

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🌐 Live Demo

[View Live Demo](https://your-live-demo-url.com)

> Catatan: Ganti dengan URL live Anda

---

🛠 Built with ❤️ by **[Your Name]**  
📧 Contact: [your.email@example.com]  
🔗 Portfolio: [https://your-portfolio.com](https://your-portfolio.com)