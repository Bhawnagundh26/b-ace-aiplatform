// src/app/loader/page.tsx
const LoaderScreen = () => {
  return (
    <div className="max-w-md p-6 bg-white shadow-lg rounded-md text-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid rounded-full text-blue-600 border-current border-t-transparent" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="mt-4">Loading...</p>
    </div>
  );
};

export default LoaderScreen;
