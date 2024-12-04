import React, { useState, useEffect, useRef } from 'react';

const RecordAnswerScreen = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const initRecorder = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.ondataavailable = (event) => {
        const url = URL.createObjectURL(event.data);
        setVideoUrl(url);
      };
    };

    initRecorder();
  }, []);

  const startRecording = () => {
    mediaRecorder?.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-lg p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4">Record Your Answer</h1>
        <div className="mb-4">
          <video ref={videoRef} src={videoUrl ?? ''} controls className="w-full h-auto"></video>
        </div>
        <div>
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-6 py-2 ${isRecording ? 'bg-red-500' : 'bg-green-500'} text-white rounded`}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordAnswerScreen;
