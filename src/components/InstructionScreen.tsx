const InstructionScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-2xl font-bold mb-4">Welcome to b-ace-ai</h1>
    <p className="mb-6 text-center text-gray-700">
      Follow the instructions carefully to complete the AI Interview.
    </p>
    <button
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      onClick={onNext}
    >
      Start
    </button>
  </div>
);

export default InstructionScreen;
