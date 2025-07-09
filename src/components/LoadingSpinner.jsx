function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-12">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-blue-200 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      </div>
    </div>
  );
}
export default LoadingSpinner;
