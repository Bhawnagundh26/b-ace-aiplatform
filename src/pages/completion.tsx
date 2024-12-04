const CompletionScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4">Test Completed</h1>
        <p>Your interview is now complete. Thank you for your time!</p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Finish</button>
      </div>
    </div>
  );
};

export default CompletionScreen;
