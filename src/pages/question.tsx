import React, { useEffect } from 'react';

const QuestionScreen = () => {
  useEffect(() => {
    const audio = new Audio('/path-to-question-audio.mp3');
    audio.play();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4">Question</h1>
        <p>Please listen to the question carefully and record your answer.</p>
      </div>
    </div>
  );
};

export default QuestionScreen;
