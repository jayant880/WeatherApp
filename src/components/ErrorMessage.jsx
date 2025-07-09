function ErrorMessage({ message }) {
  return (
    <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl m-4 shadow-lg backdrop-blur-sm">
      <div className="flex items-center">
        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white text-sm font-bold">!</span>
        </div>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}
export default ErrorMessage;
