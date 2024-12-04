const QuestionScreen = ({ question, onNext }: { question: string; onNext: () => void }) => {
  const playAudio = () => {
    const audio = new Audio("/audio/question.mp3"); // Add your audio file to `public/audio/`
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Question</h1>
      <p className="mb-6 text-center text-gray-700">{question}</p>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={playAudio}
      >
        Play Question Audio
      </button>
      <button
        className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
        onClick={onNext}
      >
        Record Answer
      </button>
    </div>
  );
};

export default QuestionScreen;
