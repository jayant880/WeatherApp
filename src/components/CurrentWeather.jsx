function CurrentWeather({ location, current }) {
  if (!location || !current) return null;

  const temp = `${current.temp_c}°C / ${current.temp_f}°F`;
  const iconLink = "https:" + current.condition.icon;

  return (
    <div className="flex justify-around mt-2 bg-white rounded-2xl p-4 m-2 shadow-md">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-2xl">{location.name}</h1>
          <p className="text-gray-600">{current.condition.text}</p>
        </div>
        <div>
          <h2 className="font-bold text-xl font-sans">{temp}</h2>
        </div>
      </div>
      <div className="flex items-center">
        <img
          src={iconLink}
          alt={current.condition.text}
          className="w-16 h-16"
        />
      </div>
    </div>
  );
}

export default CurrentWeather;
