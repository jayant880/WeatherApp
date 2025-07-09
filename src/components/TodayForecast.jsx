import { Clock } from "lucide-react";

function TodayForecast({ hour }) {
  if (!hour || !Array.isArray(hour)) return null;

  const currentHour = new Date().getHours();
  const next12Hours = hour.slice(currentHour, currentHour + 12);

  return (
    <div className="max-w-4xl mx-auto px-4 mb-6">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20">
        <div className="flex items-center mb-4">
          <Clock className="w-5 h-5 text-gray-600 mr-2" />
          <h2 className="text-lg font-bold text-gray-800">Hourly Forecast</h2>
        </div>

        <div className="flex overflow-x-auto space-x-4 pb-2 scrollbar-hide">
          {next12Hours.map((h, index) => {
            const time = h.time.split(" ")[1];
            const icon = `https:${h.condition.icon}`;
            const isCurrentHour = index === 0;

            return (
              <div
                key={`${h.time}-${index}`}
                className={`flex-shrink-0 flex flex-col items-center p-4 rounded-2xl min-w-max transition-all duration-300 ${
                  isCurrentHour
                    ? "bg-gradient-to-b from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                }`}
              >
                <p
                  className={`text-sm font-medium mb-2 ${
                    isCurrentHour ? "text-white" : "text-gray-600"
                  }`}
                >
                  {isCurrentHour ? "Now" : time}
                </p>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <img src={icon} alt={h.condition.text} className="w-8 h-8" />
                </div>
                <p
                  className={`text-sm font-semibold ${
                    isCurrentHour ? "text-white" : "text-gray-800"
                  }`}
                >
                  {Math.round(h.temp_c)}°
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default TodayForecast;
