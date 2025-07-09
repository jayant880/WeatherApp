function TodayForecast({ hour }) {
  if (!hour || !Array.isArray(hour)) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-2 m-2 rounded-2xl">
      <p className="font-mono font-bold m-3">Today's Forecast</p>
      <div className="flex overflow-x-auto gap-2 pb-2">
        {hour.map((h, index) => {
          const time = h.time.split(" ")[1];
          const icon = `https:${h.condition.icon}`;
          return (
            <div
              key={`${h.time}-${index}`}
              className="flex flex-col justify-center items-center gap-2 bg-white p-4 rounded-3xl min-2-max shadow-sm"
            >
              <p className="text-sm">{time}</p>
              <img src={icon} alt={h.condition.text} className="w-10 h-10" />
              <p className="text-nowrap text-sm">
                {h.temp_c}°C / {h.temp_f}°F
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodayForecast;
