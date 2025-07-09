# Weather App

A responsive weather application built with React and Tailwind CSS.

# Demo 
[WeatherApp](https://weather-app-eight-rosy-20.vercel.app/)

## Features

- Current weather data (temperature, humidity, wind speed, UV index)
- 12-hour forecast
- Location search
- Responsive design

## Tech Stack

- React 19
- Tailwind CSS
- Lucide React (icons)

## Setup

1. Clone the repository:
```bash
git clone git@github.com:jayant880/WeatherApp.git
cd weatherApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173)

## API Integration

The app currently uses mock data. To use real weather data:

1. Get an API key from a weather service from WeatherAPI
2. Create a `.env` file:
```env
VITE_API_KEY-=your_api_key_here
```

## Components

- **App**: Main component with state management
- **SearchBar**: Location search functionality
- **CurrentWeather**: Current weather display
- **TodayForecast**: Hourly forecast
- **MoreDetails**: Additional weather metrics
