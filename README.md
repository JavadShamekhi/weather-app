# Weather App

A responsive weather application built with React, TypeScript, and Tailwind CSS. Search for cities around the world and get current weather conditions, hourly forecasts, and daily weather predictions.

**[Roadmap.sh Project](https://roadmap.sh/projects/weather-app)**

## Features

- **City Search:** Search for weather information by city name.
- **Current Weather:** View current temperature, weather conditions, and feels-like temperature.
- **Weather Details:** View humidity, wind speed, cloud cover, visibility, pressure, and UV index.
- **Hourly Forecast:** Get weather predictions for the next 24 hours.
- **Daily Forecast:** View daily minimum and maximum temperatures, precipitation probability, sunrise, and sunset times.
- **Timezone Support:** Display forecast times based on the selected city's timezone.
- **Dark / Light Mode:** Switch between themes.
- **Persistent Preferences:** Remember the selected theme and last searched city using Local Storage.
- **Refresh:** Fetch the latest weather information.
- **Loading Skeleton:** Display skeleton UI while weather data is loading.
- **Error Handling:** Handle API request failures and invalid locations.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React
- Visual Crossing Weather API
- Local Storage

## Getting Started

### Prerequisites

- Node.js
- npm
- A Visual Crossing API key

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory:

   ```env
   VITE_WEATHER_API_KEY=your_api_key
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL provided by Vite.

## API

This project uses the **[Visual Crossing Weather API](https://www.visualcrossing.com/weather-api/)** to retrieve weather information.

The application requests:

- Current weather conditions
- Hourly weather forecasts
- Daily weather forecasts

Weather data is requested using metric units.

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_WEATHER_API_KEY` | Visual Crossing API key |

**Note:** Environment variables prefixed with `VITE_` are exposed to the client-side application. This setup is suitable for a personal demo, but a production application should use a backend API proxy to protect the API key.

## Project Structure

```text
src/
├── components/
│   ├── CurrentWeather.tsx
│   ├── DailyForecast.tsx
│   ├── HourlyForecast.tsx
│   ├── SearchBar.tsx
│   ├── ThemeToggle.tsx
│   ├── WeatherDetails.tsx
│   └── WeatherSkeleton.tsx
│
├── services/
│   └── weatherService.ts
│
├── types/
│   └── weather.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Project Reference

This project was built as part of the [roadmap.sh Weather App project](https://roadmap.sh/projects/weather-app).

## License

This project was created for learning purposes as part of the Roadmap.sh Frontend Developer projects.