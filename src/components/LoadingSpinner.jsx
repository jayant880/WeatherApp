function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      <p className="ml-3 text-gray-600">Loading weather data...</p>
    </div>
  );
}

export default LoadingSpinner;
