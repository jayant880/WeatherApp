import { useEffect, useState } from "react";
import { currentWeather, todayWeatherForecast } from "./api/api";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import TodayForecast from "./components/TodayForecast";
import MoreDetails from "./components/MoreDetails";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [currentLocation, setCurrentLocation] = useState("London");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [todayForecastData, setTodayForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const changeCurrentLocation = (location) => {
    if (location.trim()) {
      setCurrentLocation(location);
      setError(null);
    }
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [currentData, forecastData] = await Promise.all([
          currentWeather(currentLocation),
          todayWeatherForecast(currentLocation),
        ]);

        setCurrentWeatherData(currentData);
        setTodayForecastData(forecastData);
      } catch (err) {
        setError(err.message || "Failed to fetch Weather data");
        console.error("Weather fetch error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [currentLocation]);

  return (
    <div className="min-h-screen p-2.5 bg-gray-200">
      <SearchBar
        currentLocation={currentLocation}
        changeCurrentLocation={changeCurrentLocation}
      />

      {loading && <LoadingSpinner />}

      {error && <ErrorMessage message={error} />}

      {!loading && !error && currentWeatherData && (
        <CurrentWeather
          location={currentWeatherData.location}
          current={currentWeatherData.current}
        />
      )}
      {!loading && !error && todayForecastData && (
        <>
          <TodayForecast
            hour={todayForecastData.forecast.forecastday[0].hour}
          />
          <MoreDetails
            day={todayForecastData.forecast.forecastday[0].day}
            astro={todayForecastData.forecast.forecastday[0].astro}
          />
        </>
      )}
    </div>
  );
}

export default App;
