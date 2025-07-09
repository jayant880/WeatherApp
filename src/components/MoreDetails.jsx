import {
  Eye,
  Droplets,
  Wind,
  Sun,
  Moon,
  Thermometer,
  Gauge,
  Calendar,
  Sunrise,
  Sunset,
} from "lucide-react";
function MoreDetails({ day, astro }) {
  if (!day || !astro) return null;

  const detailsData = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "High / Low",
      value: `${Math.round(day.maxtemp_c)}° / ${Math.round(day.mintemp_c)}°`,
      color: "from-red-400 to-orange-500",
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Wind",
      value: `${day.maxwind_kph} km/h`,
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Humidity",
      value: `${day.avghumidity}%`,
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "UV Index",
      value: `${day.uv}`,
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visibility",
      value: `${day.avgvis_km} km`,
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Precipitation",
      value: `${day.totalprecip_mm} mm`,
      color: "from-indigo-400 to-purple-500",
    },
  ];

  const sunData = [
    {
      icon: <Sunrise className="w-6 h-6" />,
      title: "Sunrise",
      value: astro.sunrise,
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Sunset className="w-6 h-6" />,
      title: "Sunset",
      value: astro.sunset,
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Moonrise",
      value: astro.moonrise,
      color: "from-indigo-400 to-purple-500",
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "Moonset",
      value: astro.moonset,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 mb-6">
      {/* Weather Details */}
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
        <div className="flex items-center mb-6">
          <Gauge className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-lg font-bold text-gray-800">Weather Details</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {detailsData.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div
                    className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sun & Moon */}
      <div className="mt-6 bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
        <div className="flex items-center mb-6">
          <Calendar className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-lg font-bold text-gray-800">Sun & Moon</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sunData.map((item, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative text-center">
                  <div
                    className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${item.color} text-white mb-3 shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoreDetails;
