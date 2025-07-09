function MoreDetails({ day, astro }) {
  if (!day || !astro) {
    return null;
  }

  const maxTemp = `${day.maxtemp_c}°C / ${day.maxtemp_f} °F`;
  const minTemp = `${day.mintemp_c}°C / ${day.mintemp_f}°F`;
  const maxWind = ` ${day.maxwind_kph} kph /  ${day.maxwind_mpH} mph`;
  const totalRain = `${day.totalprecip_mm} mm /  ${day.totalprecip_in} in`;
  const dayCycle = `${astro.sunrise} - ${astro.sunset}`;
  const nightCycle = `${astro.moonrise} - ${astro.moonset}`;
  const humidity = `${day.avghumidity}%`;
  const visiblity = `${day.avgvis_km}km`;

  const weatherMeasuementList = [
    {
      iconClass: "fa-solid fa-temperature-high",
      text: "Max Temperature",
      value: maxTemp,
    },
    {
      iconClass: "fas fa-thermometer-half",
      text: "Min Temperature",
      value: minTemp,
    },
    { iconClass: "fa-solid fa-sun", text: "UV", value: day.uv },
    {
      iconClass: "fa-solid fa-wind",
      text: "Max Wind",
      value: maxWind,
    },
    {
      iconClass: "fa-solid fa-droplet",
      text: "Total Rain",
      value: totalRain,
    },
    {
      iconClass: "fa-solid fa-droplet",
      text: "Humidity",
      value: humidity,
    },
    {
      iconClass: "fa-solid fa-eye-low-vision",
      text: "Avg Visibility",
      value: visiblity,
    },
    {
      iconClass: "fa-solid fa-sun",
      text: "Sunrise - Sunset",
      value: dayCycle,
    },
    {
      iconClass: "fa-solid fa-moon",
      text: "Moonrise - Moonset",
      value: nightCycle,
    },
  ];

  return (
    <div className=" bg-gray-100 rounded-2xl p-3 m-2">
      <p className="font-bold text-lg mb-3">Current Stats</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
        {weatherMeasuementList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-2 p-3 bg-white rounded-2xl items-center shadow-sm"
            >
              <div className="text-2xl text-indigo-500 flex justify-center items-center">
                <i className={item.iconClass}></i>
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-600">{item.text}</p>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreDetails;
