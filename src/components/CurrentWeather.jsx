import { MapPin, Droplets, Wind } from "lucide-react";

function CurrentWeather({ location, current }) {
  if (!location || !current) return null;

  const iconLink = `https:${current.condition.icon}`;

  return (
    <div className="max-w-4xl mx-auto px-4 mb-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 shadow-2xl">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 animate-pulse delay-1000"></div>

        <div className="relative p-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-white/80 mr-2" />
                <h1 className="text-white text-xl font-bold">
                  {location.name}
                </h1>
              </div>
              <p className="text-white/80 text-sm mb-4 capitalize">
                {current.condition.text}
              </p>

              <div className="flex items-baseline">
                <span className="text-6xl font-light text-white mr-2">
                  {Math.round(current.temp_c)}
                </span>
                <span className="text-2xl text-white/80">°C</span>
                <span className="text-white/60 ml-4 text-lg">
                  / {Math.round(current.temp_f)}°F
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-lg">
                <img
                  src={iconLink}
                  alt={current.condition.text}
                  className="w-16 h-16 filter drop-shadow-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm">
                  <Wind className="w-5 h-5 text-white mx-auto mb-1" />
                  <p className="text-white/80 text-xs">
                    {current.wind_kph} km/h
                  </p>
                </div>
                <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm">
                  <Droplets className="w-5 h-5 text-white mx-auto mb-1" />
                  <p className="text-white/80 text-xs">{current.humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
