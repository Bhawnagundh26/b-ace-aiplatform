const LoaderScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid rounded-full text-blue-600 border-current border-t-transparent" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <span className="ml-3">Loading...</span>
      </div>
    </div>
  );
};

export default LoaderScreen;
