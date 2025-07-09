import { useState } from "react";

function SearchBar({ currentLocation, changeCurrentLocation }) {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim()) {
      changeCurrentLocation(location);
      setLocation("");
    }
  };

  return (
    <form
      className="flex justify-between p-2.5 m-2 gap-3 items-center"
      onSubmit={handleSubmit}
    >
      <input
        className=" flex-1 border-2 border-gray-300 rounded-2xl p-2 shadow-2xs focus:outline-nonr focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter Location"
      />
      <button
        type="submit"
        className="bg-white shadow-sm rounded-2xl p-2.5 min-w-24 font-bold hover:bg-gray-200 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-md"
      >
        Search
      </button>
      <span className="text-lg font-bold font-mono">
        Current: {currentLocation}
      </span>
    </form>
  );
}

export default SearchBar;
