import { useState } from "react";
import { Search, MapPin } from "lucide-react";

function SearchBar({ currentLocation, changeCurrentLocation }) {
  const [location, setLocation] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (location.trim()) {
      changeCurrentLocation(location);
      setLocation("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="relative">
        <div
          className={`relative transition-all duration-300 ${
            isFocused ? "transform scale-105" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-2 shadow-2xl border border-white/20">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  className="w-full pl-12 pr-4 py-4 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none text-lg"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search for a city..."
                />
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-600 hover:to-purple-700"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4 text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">
            Current: {currentLocation}
          </span>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
