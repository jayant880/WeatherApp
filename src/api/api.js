import weatherApi from "./weatherApi";

export const currentWeather = async (location) => {
    try {
        const response = await weatherApi.get('/current.json', {
            params: {
                q: location
            }
        });
        return response;
    } catch (err) {
        console.error("Current Weather API error:", err.message);
        throw new Error(`Failed to fetch current weather: ${err.message}`);
    }
}

export const todayWeatherForecast = async (location) => {
    try {
        const response = await weatherApi.get('/forecast.json', {
            params: {
                q: location,
                days: 1,
                aqi: "no",
                alerts: "no"
            }
        })
        return response;
    } catch (err) {
        console.error("Today forecast API error:", err.message);
        throw new Error(`Failed to fetch today's forecast: ${err.message}`);
    }
}

export const sevenDayWeatherForecast = async (location) => {
    try {
        const response = await weatherApi.get('/forecast.json', {
            params: {
                q: location,
                days: 7,
                aqi: "no",
                alerts: "no"
            }
        });
        return response;
    } catch (err) {
        console.error("Seven day forecast API error:", err.message);
        throw new Error(`Failed to fetch 7-day forecast: ${err.message}`);
    }
}